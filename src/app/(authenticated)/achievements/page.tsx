'use client'

import {
  Typography,
  Card,
  Row,
  Col,
  Progress,
  Button,
  Space,
  Divider,
} from 'antd'
import {
  TrophyOutlined,
  ShareAltOutlined,
  StarOutlined,
  RocketOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function AchievementsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  // Fetch user skills with related skill information
  const { data: userSkills } = Api.userSkill.findMany.useQuery({
    where: { userId: user?.id },
    include: { skill: true },
  })

  // Fetch user courses with course information
  const { data: userCourses } = Api.userCourse.findMany.useQuery({
    where: { userId: user?.id },
    include: { course: true },
  })

  // Calculate total progress
  const totalSkills = userSkills?.length || 0
  const verifiedSkills =
    userSkills?.filter(skill => skill.verified)?.length || 0
  const skillProgress =
    totalSkills > 0 ? (verifiedSkills / totalSkills) * 100 : 0

  const completedCourses =
    userCourses?.filter(course => course.status === 'COMPLETED')?.length || 0
  const totalCourses = userCourses?.length || 0
  const courseProgress =
    totalCourses > 0 ? (completedCourses / totalCourses) * 100 : 0

  const handleShare = (achievement: string) => {
    // Simulate sharing functionality
    enqueueSnackbar(`Sharing ${achievement} achievement`, {
      variant: 'success',
    })
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
        <Title level={2}>
          <TrophyOutlined style={{ marginRight: 8 }} />
          My Achievements
        </Title>
        <Text>Track your progress and celebrate your learning journey!</Text>

        <Divider />

        <Row gutter={[24, 24]}>
          {/* Overall Progress */}
          <Col xs={24} md={12}>
            <Card
              title={
                <>
                  <StarOutlined /> Overall Progress
                </>
              }
            >
              <Space direction="vertical" style={{ width: '100%' }}>
                <Text>Skills Mastery</Text>
                <Progress percent={Math.round(skillProgress)} status="active" />
                <Text>Course Completion</Text>
                <Progress
                  percent={Math.round(courseProgress)}
                  status="active"
                />
              </Space>
            </Card>
          </Col>

          {/* Skill Badges */}
          <Col xs={24} md={12}>
            <Card
              title={
                <>
                  <RocketOutlined /> Skill Badges
                </>
              }
            >
              <Row gutter={[16, 16]}>
                {userSkills?.map(userSkill => (
                  <Col key={userSkill.id} xs={12}>
                    <Card size="small">
                      <Space direction="vertical" style={{ width: '100%' }}>
                        <Text strong>{userSkill.skill?.name}</Text>
                        <Text
                          type={userSkill.verified ? 'success' : 'secondary'}
                        >
                          {userSkill.verified ? 'Verified ✓' : 'In Progress'}
                        </Text>
                        <Button
                          icon={<ShareAltOutlined />}
                          size="small"
                          onClick={() =>
                            handleShare(userSkill.skill?.name || '')
                          }
                        >
                          Share
                        </Button>
                      </Space>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Card>
          </Col>

          {/* Course Achievements */}
          <Col xs={24}>
            <Card title="Course Achievements">
              <Row gutter={[16, 16]}>
                {userCourses?.map(userCourse => (
                  <Col key={userCourse.id} xs={24} sm={12} md={8}>
                    <Card size="small">
                      <Space direction="vertical" style={{ width: '100%' }}>
                        <Text strong>{userCourse.course?.title}</Text>
                        <Progress
                          percent={Math.round(userCourse.progress)}
                          size="small"
                        />
                        <Text
                          type={
                            userCourse.status === 'COMPLETED'
                              ? 'success'
                              : 'warning'
                          }
                        >
                          {userCourse.status}
                        </Text>
                        <Button
                          icon={<ShareAltOutlined />}
                          size="small"
                          onClick={() =>
                            handleShare(userCourse.course?.title || '')
                          }
                        >
                          Share
                        </Button>
                      </Space>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    </PageLayout>
  )
}
