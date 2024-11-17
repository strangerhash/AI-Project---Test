'use client'

import {
  Typography,
  Card,
  Progress,
  Button,
  Row,
  Col,
  Space,
  Select,
  Spin,
} from 'antd'
import {
  BookOutlined,
  CheckCircleOutlined,
  SettingOutlined,
  TrophyOutlined,
} from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function LearningPathPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  // Fetch learning paths with courses
  const { data: learningPaths, isLoading: isLoadingPaths } =
    Api.learningPath.findMany.useQuery({
      include: { courses: true },
    })

  // Fetch user courses
  const {
    data: userCourses,
    isLoading: isLoadingCourses,
    refetch: refetchUserCourses,
  } = Api.userCourse.findMany.useQuery({
    where: { userId: user?.id },
    include: { course: true },
  })

  // Update user course mutation
  const { mutateAsync: updateUserCourse } = Api.userCourse.update.useMutation()

  // Create user course mutation
  const { mutateAsync: createUserCourse } = Api.userCourse.create.useMutation()

  const handleMarkAsCompleted = async (courseId: string) => {
    try {
      const userCourse = userCourses?.find(uc => uc.courseId === courseId)

      if (userCourse) {
        await updateUserCourse({
          where: { id: userCourse.id },
          data: {
            status: 'COMPLETED',
            progress: 100,
            completionDate: new Date().toISOString(),
          },
        })
      } else {
        await createUserCourse({
          data: {
            userId: user?.id,
            courseId: courseId,
            status: 'COMPLETED',
            progress: 100,
            completionDate: new Date().toISOString(),
          },
        })
      }

      await refetchUserCourses()
      enqueueSnackbar('Course marked as completed!', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to update course status', { variant: 'error' })
    }
  }

  const handleUpdateProgress = async (courseId: string, progress: number) => {
    try {
      const userCourse = userCourses?.find(uc => uc.courseId === courseId)

      if (userCourse) {
        await updateUserCourse({
          where: { id: userCourse.id },
          data: {
            progress,
            status: progress === 100 ? 'COMPLETED' : 'IN_PROGRESS',
          },
        })
      } else {
        await createUserCourse({
          data: {
            userId: user?.id,
            courseId: courseId,
            status: 'IN_PROGRESS',
            progress,
          },
        })
      }

      await refetchUserCourses()
      enqueueSnackbar('Progress updated successfully!', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to update progress', { variant: 'error' })
    }
  }

  if (isLoadingPaths || isLoadingCourses) {
    return (
      <PageLayout layout="full-width">
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <Spin size="large" />
        </div>
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px' }}>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <div>
            <Title level={2}>
              <BookOutlined /> My Learning Journey
            </Title>
            <Paragraph>
              Track your progress, complete courses, and achieve your learning
              goals.
            </Paragraph>
          </div>

          {learningPaths?.map(path => (
            <Card
              key={path.id}
              title={path.name}
              extra={
                <Text type="secondary">
                  Duration: {path.estimatedDuration} hours
                </Text>
              }
            >
              <Paragraph>{path.description}</Paragraph>
              <Text type="secondary">Difficulty: {path.difficultyLevel}</Text>

              <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
                {path.courses?.map(course => {
                  const userCourse = userCourses?.find(
                    uc => uc.courseId === course.id,
                  )
                  return (
                    <Col xs={24} sm={12} md={8} key={course.id}>
                      <Card
                        size="small"
                        title={course.title}
                        extra={
                          userCourse?.status === 'COMPLETED' && (
                            <CheckCircleOutlined style={{ color: '#52c41a' }} />
                          )
                        }
                      >
                        <Paragraph ellipsis={{ rows: 2 }}>
                          {course.description}
                        </Paragraph>
                        <Progress
                          percent={userCourse?.progress || 0}
                          size="small"
                          status={
                            userCourse?.status === 'COMPLETED'
                              ? 'success'
                              : 'active'
                          }
                        />
                        <Space
                          direction="vertical"
                          style={{ width: '100%', marginTop: '10px' }}
                        >
                          <Select
                            style={{ width: '100%' }}
                            value={userCourse?.progress || 0}
                            onChange={value =>
                              handleUpdateProgress(course.id, value)
                            }
                            options={[
                              { value: 0, label: '0%' },
                              { value: 25, label: '25%' },
                              { value: 50, label: '50%' },
                              { value: 75, label: '75%' },
                              { value: 100, label: '100%' },
                            ]}
                          />
                          <Button
                            type="primary"
                            block
                            onClick={() => handleMarkAsCompleted(course.id)}
                            disabled={userCourse?.status === 'COMPLETED'}
                          >
                            Mark as Completed
                          </Button>
                        </Space>
                      </Card>
                    </Col>
                  )
                })}
              </Row>
            </Card>
          ))}
        </Space>
      </div>
    </PageLayout>
  )
}
