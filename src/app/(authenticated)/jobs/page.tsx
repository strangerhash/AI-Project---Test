'use client'

import {
  Typography,
  Card,
  Row,
  Col,
  Button,
  Space,
  Tag,
  Input,
  Select,
  Empty,
} from 'antd'
import {
  BookOutlined,
  SearchOutlined,
  FilterOutlined,
  BookFilled,
} from '@ant-design/icons'
import { useState } from 'react'
import { Prisma } from '@prisma/client'
const { Title, Text, Paragraph } = Typography
type JobWithApplications = Prisma.JobGetPayload<{
  include: { userJobs: true }
}>
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function JobOpportunitiesPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [searchTerm, setSearchTerm] = useState('')
  const [locationFilter, setLocationFilter] = useState('')
  const [statusFilter, setStatusFilter] = useState('')

  // Fetch user skills
  const { data: userSkills } = Api.userSkill.findMany.useQuery({
    where: { userId: user?.id },
    include: { skill: true },
  })

  // Fetch all jobs
  const { data: jobs, refetch: refetchJobs } = Api.job.findMany.useQuery({
    include: { userJobs: true },
  })

  // Create job application mutation
  const { mutateAsync: createJobApplication } = Api.userJob.create.useMutation()

  const handleApplyJob = async (jobId: string) => {
    try {
      await createJobApplication({
        data: {
          applicationDate: new Date().toISOString(),
          status: 'PENDING',
          userId: user?.id || '',
          jobId: jobId,
        },
      })
      await refetchJobs()
      enqueueSnackbar('Successfully applied for the job!', {
        variant: 'success',
      })
    } catch (error) {
      enqueueSnackbar('Failed to apply for the job', { variant: 'error' })
    }
  }

  const filteredJobs = jobs?.filter((job: JobWithApplications) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesLocation = locationFilter
      ? job.location === locationFilter
      : true
    const matchesStatus = statusFilter
      ? job.userJobs.some(
          uj => uj.userId === user?.id && uj.status === statusFilter,
        )
      : true
    return matchesSearch && matchesLocation && matchesStatus
  })

  const isJobApplied = (job: JobWithApplications) => {
    return job.userJobs.some(uj => uj.userId === user?.id)
  }

  const getJobStatus = (job: JobWithApplications) => {
    const userJob = job.userJobs.find(uj => uj.userId === user?.id)
    return userJob?.status || 'NOT_APPLIED'
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '20px' }}>
        <Title level={2}>Job Opportunities</Title>
        <Text>
          Discover and apply for jobs matching your skills and interests
        </Text>

        <Space
          direction="vertical"
          size="large"
          style={{ width: '100%', marginTop: 24 }}
        >
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8}>
              <Input
                prefix={<SearchOutlined />}
                placeholder="Search jobs by title or company"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
              />
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Select
                style={{ width: '100%' }}
                placeholder="Filter by location"
                allowClear
                value={locationFilter}
                onChange={setLocationFilter}
              >
                {Array.from(new Set(jobs?.map(job => job.location)))?.map(
                  location => (
                    <Select.Option key={location} value={location}>
                      {location}
                    </Select.Option>
                  ),
                )}
              </Select>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Select
                style={{ width: '100%' }}
                placeholder="Filter by status"
                allowClear
                value={statusFilter}
                onChange={setStatusFilter}
              >
                <Select.Option value="PENDING">Pending</Select.Option>
                <Select.Option value="ACCEPTED">Accepted</Select.Option>
                <Select.Option value="REJECTED">Rejected</Select.Option>
              </Select>
            </Col>
          </Row>

          {filteredJobs?.length ? (
            <Row gutter={[16, 16]}>
              {filteredJobs.map((job: JobWithApplications) => (
                <Col xs={24} sm={12} lg={8} key={job.id}>
                  <Card
                    title={job.title}
                    extra={
                      isJobApplied(job) ? <BookFilled /> : <BookOutlined />
                    }
                  >
                    <Space direction="vertical" style={{ width: '100%' }}>
                      <Text strong>{job.company}</Text>
                      <Text type="secondary">{job.location}</Text>
                      {job.salaryRange && (
                        <Text>Salary: {job.salaryRange}</Text>
                      )}
                      <Paragraph ellipsis={{ rows: 2 }}>
                        {job.description}
                      </Paragraph>

                      <Space>
                        <Tag
                          color={
                            getJobStatus(job) === 'PENDING'
                              ? 'processing'
                              : getJobStatus(job) === 'ACCEPTED'
                                ? 'success'
                                : getJobStatus(job) === 'REJECTED'
                                  ? 'error'
                                  : 'default'
                          }
                        >
                          {getJobStatus(job)}
                        </Tag>
                      </Space>

                      <Button
                        type="primary"
                        disabled={isJobApplied(job)}
                        onClick={() => handleApplyJob(job.id)}
                      >
                        {isJobApplied(job) ? 'Applied' : 'Apply Now'}
                      </Button>
                    </Space>
                  </Card>
                </Col>
              ))}
            </Row>
          ) : (
            <Empty description="No jobs found matching your criteria" />
          )}
        </Space>
      </div>
    </PageLayout>
  )
}
