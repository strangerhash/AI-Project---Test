'use client'

import {
  Button,
  Card,
  Form,
  Input,
  Select,
  Space,
  Typography,
  Upload,
  Row,
  Col,
} from 'antd'
import {
  UploadOutlined,
  PlusOutlined,
  RocketOutlined,
  EditOutlined,
} from '@ant-design/icons'
import { useState } from 'react'
import type { UploadFile } from 'antd/es/upload/interface'
import { Prisma } from '@prisma/client'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function SkillsAssessmentPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const { mutateAsync: uploadFile } = useUploadPublic()
  const [fileList, setFileList] = useState<UploadFile[]>([])
  const [analyzing, setAnalyzing] = useState(false)

  const { data: skills } = Api.skill.findMany.useQuery({})
  const { data: userSkills } = Api.userSkill.findMany.useQuery({
    where: { userId: user?.id },
    include: { skill: true },
  })
  const { mutateAsync: createUserSkill } = Api.userSkill.create.useMutation()
  const { mutateAsync: updateUserSkill } = Api.userSkill.update.useMutation()
  const { mutateAsync: generateText } = Api.ai.generateText.useMutation()

  const handleResumeUpload = async (file: File) => {
    try {
      setAnalyzing(true)
      const { url } = await uploadFile({ file })

      const prompt = `Analyze this resume URL: ${url} and list the key skills found.`
      const { answer } = await generateText({ prompt })

      enqueueSnackbar('Resume analyzed successfully!', { variant: 'success' })
      setAnalyzing(false)
      return false // Prevent default upload behavior
    } catch (error) {
      enqueueSnackbar('Error analyzing resume', { variant: 'error' })
      setAnalyzing(false)
      return false
    }
  }

  const handleAddSkill = async (values: any) => {
    try {
      await createUserSkill({
        data: {
          userId: user?.id || '',
          skillId: values.skillId,
          proficiencyLevel: values.proficiencyLevel,
          verified: false,
        },
      })
      enqueueSnackbar('Skill added successfully!', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Error adding skill', { variant: 'error' })
    }
  }

  const handleUpdateSkill = async (
    skillId: string,
    proficiencyLevel: string,
  ) => {
    try {
      await updateUserSkill({
        where: { id: skillId },
        data: { proficiencyLevel },
      })
      enqueueSnackbar('Skill updated successfully!', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Error updating skill', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center">
        <Col xs={24} sm={20} md={16} lg={14}>
          <Title level={2}>Skills Assessment</Title>
          <Paragraph>
            Upload your resume for AI analysis or manually input your skills to
            get personalized recommendations and identify skill gaps.
          </Paragraph>

          <Card title="Resume Upload" style={{ marginBottom: 24 }}>
            <Upload
              fileList={fileList}
              beforeUpload={handleResumeUpload}
              onChange={({ fileList }) => setFileList(fileList)}
            >
              <Button icon={<UploadOutlined />} loading={analyzing}>
                Upload Resume
              </Button>
            </Upload>
          </Card>

          <Card title="Add Skills Manually" style={{ marginBottom: 24 }}>
            <Form onFinish={handleAddSkill} layout="vertical">
              <Form.Item
                name="skillId"
                label="Skill"
                rules={[{ required: true, message: 'Please select a skill' }]}
              >
                <Select
                  placeholder="Select a skill"
                  options={skills?.map(skill => ({
                    value: skill.id,
                    label: skill.name,
                  }))}
                />
              </Form.Item>
              <Form.Item
                name="proficiencyLevel"
                label="Proficiency Level"
                rules={[
                  {
                    required: true,
                    message: 'Please select proficiency level',
                  },
                ]}
              >
                <Select
                  placeholder="Select proficiency level"
                  options={[
                    { value: 'BEGINNER', label: 'Beginner' },
                    { value: 'INTERMEDIATE', label: 'Intermediate' },
                    { value: 'ADVANCED', label: 'Advanced' },
                    { value: 'EXPERT', label: 'Expert' },
                  ]}
                />
              </Form.Item>
              <Button type="primary" htmlType="submit" icon={<PlusOutlined />}>
                Add Skill
              </Button>
            </Form>
          </Card>

          <Card title="My Skills">
            {userSkills?.map(userSkill => (
              <Card.Grid style={{ width: '100%' }} key={userSkill.id}>
                <Space
                  align="center"
                  style={{ width: '100%', justifyContent: 'space-between' }}
                >
                  <Text strong>{userSkill.skill?.name}</Text>
                  <Select
                    value={userSkill.proficiencyLevel}
                    onChange={value => handleUpdateSkill(userSkill.id, value)}
                    options={[
                      { value: 'BEGINNER', label: 'Beginner' },
                      { value: 'INTERMEDIATE', label: 'Intermediate' },
                      { value: 'ADVANCED', label: 'Advanced' },
                      { value: 'EXPERT', label: 'Expert' },
                    ]}
                  />
                </Space>
              </Card.Grid>
            ))}
          </Card>
        </Col>
      </Row>
    </PageLayout>
  )
}
