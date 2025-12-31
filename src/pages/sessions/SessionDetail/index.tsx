import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Avatar, Tag, Card, Divider, Dropdown } from "antd";
import {
  ArrowLeftOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  UserOutlined,
  DollarOutlined,
  MoreOutlined,
} from "@ant-design/icons";
import {
  TEACHING_SESSIONS,
  LEARNING_SESSIONS,
} from "../../../constants/constants";
import DeleteConfirmModal from "../../../components/common/DeleteConfirmModal";

const SessionDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);

  // Find session in teaching or learning sessions
  const sessionIndex = id ? parseInt(id) : -1;
  const teachingSession = TEACHING_SESSIONS[sessionIndex];
  const learningSession = LEARNING_SESSIONS[sessionIndex];
  const session = teachingSession || learningSession;
  const isTeaching = !!teachingSession;

  const handleDeleteClick = () => {
    setDeleteModalVisible(true);
  };

  const handleDeleteConfirm = async () => {
    setDeleteLoading(true);
    try {
      // Replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setDeleteModalVisible(false);
      navigate("/sessions");
    } catch (error) {
      console.error("Error deleting session:", error);
    } finally {
      setDeleteLoading(false);
    }
  };

  const handleDeleteCancel = () => {
    setDeleteModalVisible(false);
  };

  if (!session) {
    return (
      <div className="min-h-screen bg-[#fdfbf9] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Session not found
          </h2>
          <Button onClick={() => navigate("/sessions")}>
            Go back to Sessions
          </Button>
        </div>
      </div>
    );
  }

  const getStatusConfig = () => {
    const status = (
      "status" in session ? session.status : "Scheduled"
    ) as string;
    switch (status) {
      case "Requested":
        return {
          color: "bg-yellow-50 text-yellow-700 border-yellow-200",
          dot: "bg-yellow-500",
          text: "Requested",
        };
      case "Scheduled":
        return {
          color: "bg-green-50 text-green-700 border-green-200",
          dot: "bg-[#2bee79]",
          text: "Scheduled",
        };
      case "Completed":
        return {
          color: "bg-slate-100 text-slate-600 border-slate-200",
          dot: "",
          text: "Completed",
        };
      case "Rejected":
        return {
          color: "bg-red-50 text-red-600 border-red-200",
          dot: "bg-red-500",
          text: "Rejected",
        };
      default:
        return {
          color: "bg-slate-100 text-slate-600 border-slate-200",
          dot: "",
          text: status,
        };
    }
  };

  const statusConfig = getStatusConfig();

  return (
    <div className="min-h-screen bg-[#fdfbf9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <Button
            icon={<ArrowLeftOutlined />}
            onClick={() => navigate("/sessions")}
            className="hover:bg-white"
          >
            Back to Sessions
          </Button>
          <Dropdown
            menu={{
              items: [
                {
                  key: "2",
                  label: "Delete",
                  danger: true,
                  onClick: handleDeleteClick,
                },
              ],
            }}
            trigger={["click"]}
          >
            <Button
              type="text"
              shape="circle"
              icon={<MoreOutlined />}
              className="hover:bg-white"
            />
          </Dropdown>
        </div>

        {/* Main Card */}
        <Card className="rounded-2xl shadow-sm border-slate-200">
          <div className="flex flex-col gap-6">
            {/* Title and Status */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="flex items-start gap-4 flex-1">
                {"icon" in session && session.icon && (
                  <div className="flex size-16 sm:size-20 shrink-0 items-center justify-center rounded-xl bg-slate-50">
                    <span className="text-3xl sm:text-4xl">{session.icon}</span>
                  </div>
                )}
                <div className="flex-1">
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
                    {session.title}
                  </h1>
                  <Tag
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-bold border ${statusConfig.color}`}
                  >
                    {statusConfig.dot && (
                      <span
                        className={`h-2 w-2 rounded-full ${statusConfig.dot}`}
                      ></span>
                    )}
                    {statusConfig.text}
                  </Tag>
                </div>
              </div>
            </div>

            <Divider className="my-2" />

            {/* Session Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Duration */}
              <div className="flex items-start gap-3">
                <ClockCircleOutlined className="text-[#2bee79] text-xl mt-1" />
                <div>
                  <p className="text-sm text-slate-500 font-medium mb-1">
                    Duration
                  </p>
                  <p className="text-base font-semibold text-slate-900">
                    {"duration" in session
                      ? session.duration
                      : (session as any).duration}
                  </p>
                </div>
              </div>

              {/* Credits/Cost */}
              <div className="flex items-start gap-3">
                <DollarOutlined className="text-[#2bee79] text-xl mt-1" />
                <div>
                  <p className="text-sm text-slate-500 font-medium mb-1">
                    {isTeaching ? "Credits" : "Cost"}
                  </p>
                  <p className="text-base font-semibold text-slate-900">
                    {isTeaching
                      ? statusConfig.text === "Completed"
                        ? `Earned ${
                            "credits" in session ? session.credits : ""
                          }`
                        : `${
                            "credits" in session ? session.credits : ""
                          } Credits`
                      : `-${
                          "cost" in session
                            ? Math.abs(parseInt(session?.cost as string))
                            : 0
                        } Credits`}
                  </p>
                </div>
              </div>

              {/* Learner/Host */}
              {isTeaching ? (
                <div className="flex items-start gap-3">
                  <UserOutlined className="text-[#2bee79] text-xl mt-1" />
                  <div className="flex-1">
                    <p className="text-sm text-slate-500 font-medium mb-2">
                      Learner
                    </p>
                    <div className="flex items-center gap-3">
                      <Avatar
                        size={40}
                        src={
                          "learnerImage" in session ? session.learnerImage : ""
                        }
                        className="border-2 border-white"
                      />
                      <span className="text-base font-semibold text-slate-900">
                        {"learner" in session ? session.learner : ""}
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-start gap-3">
                  <UserOutlined className="text-[#2bee79] text-xl mt-1" />
                  <div className="flex-1">
                    <p className="text-sm text-slate-500 font-medium mb-2">
                      Host
                    </p>
                    <div className="flex items-center gap-3">
                      <Avatar
                        size={40}
                        src={
                          "hostImage" in session
                            ? session.hostImage
                            : (session as any).hostImage
                        }
                        className="border-2 border-white"
                      />
                      <span className="text-base font-semibold text-slate-900">
                        {"host" in session
                          ? session.host
                          : (session as any).host}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Date/Time (if scheduled) */}
              {statusConfig.text === "Scheduled" && (
                <div className="flex items-start gap-3">
                  <CalendarOutlined className="text-[#2bee79] text-xl mt-1" />
                  <div>
                    <p className="text-sm text-slate-500 font-medium mb-1">
                      Scheduled For
                    </p>
                    <p className="text-base font-semibold text-slate-900">
                      Today, 4:00 PM
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            {statusConfig.text === "Requested" && isTeaching && (
              <>
                <Divider className="my-2" />
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    type="primary"
                    size="large"
                    className="bg-[#2bee79] hover:bg-[#28d970] border-none rounded-xl font-bold h-12"
                  >
                    Accept Request
                  </Button>
                  <Button
                    size="large"
                    className="rounded-xl font-bold h-12 border-slate-200"
                  >
                    Decline
                  </Button>
                </div>
              </>
            )}

            {statusConfig.text === "Scheduled" && (
              <>
                <Divider className="my-2" />
                <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-green-100 text-green-700">
                      <CalendarOutlined className="text-lg" />
                    </div>
                    <div>
                      <p className="font-semibold text-green-900">
                        Session Scheduled
                      </p>
                      <p className="text-sm text-green-700">
                        Starts in 2 hours (Today, 4:00 PM)
                      </p>
                    </div>
                  </div>
                  <Button
                    type="primary"
                    size="large"
                    className="w-full bg-black hover:bg-gray-800 border-none rounded-xl font-bold h-12"
                  >
                    Join Session (Zoom)
                  </Button>
                </div>
              </>
            )}
          </div>
        </Card>
      </div>

      {/* Delete Confirmation Modal */}
      <DeleteConfirmModal
        visible={deleteModalVisible}
        title="Delete Session"
        message="Are you sure you want to delete this session?"
        itemName={session.title as string}
        onConfirm={handleDeleteConfirm}
        onCancel={handleDeleteCancel}
        loading={deleteLoading}
      />
    </div>
  );
};

export default SessionDetail;
