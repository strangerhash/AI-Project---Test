'use client'

import { Typography, Table, Space, Tag, Card } from 'antd'
import {
  UserOutlined,
  MailOutlined,
  ClockCircleOutlined,
  GlobalOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function AdminPanelPage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  // Fetch users with their related data
  const { data: users, isLoading } = Api.user.findMany.useQuery({
    include: {
      userSkills: {
        include: {
          skill: true,
        },
      },
      userCourses: {
        include: {
          course: true,
        },
      },
      mentoringSessions: true,
    },
  })

  const columns = [
    {
      title: 'User',
      key: 'user',
      render: (record: any) => (
        <Space direction="vertical">
          <Space>
            <UserOutlined />
            <Text strong>{record.name || 'N/A'}</Text>
          </Space>
          <Space>
            <MailOutlined />
            <Text>{record.email || 'N/A'}</Text>
          </Space>
        </Space>
      ),
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag color={status === 'VERIFIED' ? 'green' : 'orange'}>{status}</Tag>
      ),
    },
    {
      title: 'Role',
      dataIndex: 'globalRole',
      key: 'globalRole',
      render: (role: string) => (
        <Tag color={role === 'ADMIN' ? 'blue' : 'default'}>
          <GlobalOutlined /> {role}
        </Tag>
      ),
    },
    {
      title: 'Learning Progress',
      key: 'learning',
      render: (record: any) => (
        <Space direction="vertical">
          <Text>Courses: {record.userCourses?.length || 0}</Text>
          <Text>Skills: {record.userSkills?.length || 0}</Text>
          <Text>
            Mentoring Sessions: {record.mentoringSessions?.length || 0}
          </Text>
        </Space>
      ),
    },
    {
      title: 'Joined',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date: string) => (
        <Space>
          <ClockCircleOutlined />
          <Text>{dayjs(date).format('MMMM D, YYYY')}</Text>
        </Space>
      ),
    },
  ]

  if (!user?.checkRole('ADMIN')) {
    enqueueSnackbar('You do not have permission to access this page', {
      variant: 'error',
    })
    router.push('/home')
    return null
  }

  return (
    <PageLayout layout="full-width">
      <Card style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
        <Space direction="vertical" style={{ width: '100%' }} size="large">
          <div>
            <Title level={2}>User Management</Title>
            <Text type="secondary">
              View and manage all registered users and their learning progress
            </Text>
          </div>

          <Table
            columns={columns}
            dataSource={users}
            loading={isLoading}
            rowKey="id"
            pagination={{
              pageSize: 10,
              showSizeChanger: true,
              showTotal: total => `Total ${total} users`,
            }}
            scroll={{ x: true }}
          />
        </Space>
      </Card>
    </PageLayout>
  )
}
