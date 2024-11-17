'use client'

import {
  Typography,
  Card,
  Progress,
  Row,
  Col,
  Button,
  Space,
  Statistic,
} from 'antd'
import {
  TrophyOutlined,
  BookOutlined,
  RocketOutlined,
  ArrowRightOutlined,
  StarOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function HomePage() {
  const router = useRouter()
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

  // Fetch recommended learning paths
  const { data: learningPaths } = Api.learningPath.findMany.useQuery({
    take: 3,
  })

  const calculateOverallProgress = () => {
    if (!userCourses?.length) return 0
    const totalProgress = userCourses.reduce(
      (acc, course) => acc + course.progress,
      0,
    )
    return Math.round(totalProgress / userCourses.length)
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
        <Title level={2}>Learning Dashboard</Title>
        <Text>
          Welcome back, {user?.name}! Here's your learning progress and
          recommendations.
        </Text>

        <Row gutter={[24, 24]} style={{ marginTop: '24px' }}>
          {/* Skills Summary */}
          <Col xs={24} lg={8}>
            <Card
              title="Skills Assessment"
              extra={
                <Button
                  type="link"
                  onClick={() => router.push('/skills-assessment')}
                >
                  View All
                </Button>
              }
            >
              <Space direction="vertical" style={{ width: '100%' }}>
                {userSkills?.slice(0, 3).map(userSkill => (
                  <div key={userSkill.id}>
                    <Text>{userSkill.skill?.name}</Text>
                    <Progress
                      percent={
                        userSkill.proficiencyLevel === 'EXPERT'
                          ? 100
                          : userSkill.proficiencyLevel === 'INTERMEDIATE'
                            ? 66
                            : 33
                      }
                      size="small"
                    />
                  </div>
                ))}
              </Space>
            </Card>
          </Col>

          {/* Learning Progress */}
          <Col xs={24} lg={8}>
            <Card title="Learning Progress">
              <Space
                direction="vertical"
                align="center"
                style={{ width: '100%' }}
              >
                <Progress
                  type="circle"
                  percent={calculateOverallProgress()}
                  format={percent => `${percent}%`}
                />
                <Button
                  type="primary"
                  icon={<ArrowRightOutlined />}
                  onClick={() => router.push('/learning-path')}
                >
                  Continue Learning
                </Button>
              </Space>
            </Card>
          </Col>

          {/* Achievements */}
          <Col xs={24} lg={8}>
            <Card
              title="Achievements"
              extra={
                <Button
                  type="link"
                  onClick={() => router.push('/achievements')}
                >
                  View All
                </Button>
              }
            >
              <Row gutter={[16, 16]}>
                <Col span={8}>
                  <Statistic
                    title="Skills"
                    value={userSkills?.length || 0}
                    prefix={<StarOutlined />}
                  />
                </Col>
                <Col span={8}>
                  <Statistic
                    title="Courses"
                    value={userCourses?.length || 0}
                    prefix={<BookOutlined />}
                  />
                </Col>
                <Col span={8}>
                  <Statistic
                    title="Badges"
                    value={Math.floor((userCourses?.length || 0) / 3)}
                    prefix={<TrophyOutlined />}
                  />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

        {/* Recommended Learning Paths */}
        <Title level={3} style={{ marginTop: '32px' }}>
          Recommended Learning Paths
        </Title>
        <Row gutter={[24, 24]}>
          {learningPaths?.map(path => (
            <Col xs={24} md={8} key={path.id}>
              <Card hoverable onClick={() => router.push('/learning-path')}>
                <Space>
                  <RocketOutlined
                    style={{ fontSize: '24px', color: '#1890ff' }}
                  />
                  <div>
                    <Text strong>{path.name}</Text>
                    <br />
                    <Text type="secondary">
                      {path.estimatedDuration} hours • {path.difficultyLevel}
                    </Text>
                  </div>
                </Space>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </PageLayout>
  )
}
