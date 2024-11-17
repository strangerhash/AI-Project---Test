'use client'

import {
  Typography,
  Card,
  Row,
  Col,
  Select,
  Button,
  Empty,
  Spin,
  Modal,
} from 'antd'
import {
  CalendarOutlined,
  DollarOutlined,
  UserOutlined,
  BookOutlined,
} from '@ant-design/icons'
import { useState } from 'react'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function MentorsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [selectedExpertise, setSelectedExpertise] = useState<string>('')
  const [selectedIndustry, setSelectedIndustry] = useState<string>('')
  const [isBookingModalVisible, setIsBookingModalVisible] = useState(false)
  const [selectedMentorId, setSelectedMentorId] = useState<string>('')
  const [selectedDate, setSelectedDate] = useState<string>('')

  // Fetch mentors with their user information
  const { data: mentors, isLoading: mentorsLoading } =
    Api.mentor.findMany.useQuery({
      include: {
        user: true,
      },
    })

  // Fetch user's mentoring sessions
  const { data: sessions, refetch: refetchSessions } =
    Api.mentoringSession.findMany.useQuery({
      where: {
        userId: user?.id,
      },
      include: {
        mentor: {
          include: {
            user: true,
          },
        },
      },
    })

  // Book session mutation
  const { mutateAsync: bookSession } = Api.mentoringSession.create.useMutation()

  // Get unique expertise and industries for filters
  const expertiseOptions = [
    ...new Set(mentors?.map(mentor => mentor.expertise) || []),
  ]
  const industryOptions = [
    ...new Set(mentors?.map(mentor => mentor.industry) || []),
  ]

  // Filter mentors based on selected filters
  const filteredMentors = mentors?.filter(mentor => {
    const matchExpertise =
      !selectedExpertise || mentor.expertise === selectedExpertise
    const matchIndustry =
      !selectedIndustry || mentor.industry === selectedIndustry
    return matchExpertise && matchIndustry
  })

  const handleBookSession = async () => {
    try {
      await bookSession({
        data: {
          sessionDate: selectedDate,
          duration: 1,
          status: 'SCHEDULED',
          mentorId: selectedMentorId,
          userId: user?.id || '',
        },
      })
      enqueueSnackbar('Session booked successfully!', { variant: 'success' })
      setIsBookingModalVisible(false)
      refetchSessions()
    } catch (error) {
      enqueueSnackbar('Failed to book session', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '20px' }}>
        <Title level={2}>Find Your Mentor</Title>
        <Paragraph>
          Connect with experienced mentors to guide you through your career
          journey.
        </Paragraph>

        {/* Filters */}
        <Row gutter={16} style={{ marginBottom: 24 }}>
          <Col xs={24} sm={12}>
            <Select
              style={{ width: '100%' }}
              placeholder="Filter by Expertise"
              value={selectedExpertise}
              onChange={setSelectedExpertise}
              allowClear
            >
              {expertiseOptions.map(expertise => (
                <Select.Option key={expertise} value={expertise}>
                  {expertise}
                </Select.Option>
              ))}
            </Select>
          </Col>
          <Col xs={24} sm={12}>
            <Select
              style={{ width: '100%' }}
              placeholder="Filter by Industry"
              value={selectedIndustry}
              onChange={setSelectedIndustry}
              allowClear
            >
              {industryOptions.map(industry => (
                <Select.Option key={industry} value={industry}>
                  {industry}
                </Select.Option>
              ))}
            </Select>
          </Col>
        </Row>

        {/* Mentors Grid */}
        {mentorsLoading ? (
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <Spin size="large" />
          </div>
        ) : (
          <Row gutter={[16, 16]}>
            {filteredMentors?.map(mentor => (
              <Col xs={24} sm={12} lg={8} key={mentor.id}>
                <Card hoverable>
                  <div style={{ textAlign: 'center', marginBottom: 16 }}>
                    <UserOutlined style={{ fontSize: 48 }} />
                    <Title level={4}>{mentor.user?.name}</Title>
                  </div>
                  <Paragraph>
                    <BookOutlined /> Expertise: {mentor.expertise}
                  </Paragraph>
                  <Paragraph>
                    <DollarOutlined /> Rate: {mentor.hourlyRate}/hour
                  </Paragraph>
                  <Paragraph>{mentor.bio}</Paragraph>
                  <Button
                    type="primary"
                    block
                    onClick={() => {
                      setSelectedMentorId(mentor.id)
                      setIsBookingModalVisible(true)
                    }}
                  >
                    Book Session
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>
        )}

        {/* Sessions Section */}
        <Title level={3} style={{ marginTop: 48 }}>
          Your Mentoring Sessions
        </Title>
        <Row gutter={[16, 16]}>
          {sessions?.map(session => (
            <Col xs={24} sm={12} lg={8} key={session.id}>
              <Card>
                <Title level={5}>{session.mentor?.user?.name}</Title>
                <Paragraph>
                  <CalendarOutlined />{' '}
                  {dayjs(session.sessionDate).format('MMM D, YYYY')}
                </Paragraph>
                <Text
                  type={
                    session.status === 'COMPLETED' ? 'secondary' : 'success'
                  }
                >
                  {session.status}
                </Text>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Booking Modal */}
        <Modal
          title="Book Mentoring Session"
          open={isBookingModalVisible}
          onOk={handleBookSession}
          onCancel={() => setIsBookingModalVisible(false)}
        >
          <input
            type="datetime-local"
            style={{ width: '100%', padding: '8px' }}
            onChange={e => setSelectedDate(e.target.value)}
          />
        </Modal>
      </div>
    </PageLayout>
  )
}
