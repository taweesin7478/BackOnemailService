// import md5 from "md5";
// import AdminModel from "@src/models/admin";
// import LogAdminModel from "@src/models/log";
// import ServiceModel from "@src/models/data_service";
// import ReleaseModel from "@src/models/release";
// import { promisify } from "util";

// import ScheduleMeetingModel from "@src/models/schedule_meeting/schedule_meeting";
// import UserModel from "@src/models/Users/users";
// import SessionUserModel from "@src/models/session-users";
// import ActivationCodeModel from "@src/models/activative-code";
// import RoleModel from "@src/models/roles/Roles";
// import HistoryModel from "@src/models/history_room/history_room";
// import RtmpUsed from "@src/models/log_rtmp_used/log_rtmp_used";
// import ReportMeeting from "@src/models/report-meeting/report-meeting"

// import CustomError from "@src/utils/CustomError";
// import { encodeJS, decodeJS, encode, decode } from "@src/utils/hashcode";
// import { sendGenerationCodeMail } from "@src/utils/email";

// import jwt from "jsonwebtoken";
// import axios from "axios";

// import { dateTimeFormatAndCalTime } from "@src/utils/datetime";
// import dayjs from "dayjs";

import OneMailModel from "@src/models/statusOM";

export const UpdateStatus = async (body) => {
  const data = await OneMailModel.find();
  if (data.length == 0) {
    await OneMailModel.create({
      status: body.status,
      alert: body.alert,
      note: body.note,
      detail: body.detail,
      created_at: Date.now()
    });
  } else {
    await OneMailModel.findOneAndUpdate(
      { _id: data[0]._id.toString() },
      {
        status: body.status,
        alert: body.alert,
        note: body.note,
        detail: body.detail,
      },
      { new: true }
    );
  }
  return data
};

export const OMStatus = async () => {
  const data = await OneMailModel.find();
  return data;
};
