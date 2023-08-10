import PDFDocument from "pdfkit";
import contentDisposition from "content-disposition";

export const createPDF = (input, response, meetingId) => {
  const doc = new PDFDocument({ size: "A4", margin: 50, bufferPages: true });
  generateHeader(doc);
  generateBody(doc, input.data);
  generateTableMember(doc, input.data);
  doc.end();

  let buffers = [];
  doc.on("data", buffers.push.bind(buffers));
  doc.on("end", () => {
    let pdfData = Buffer.concat(buffers);
    response.writeHead(200, {
      "Content-Length": Buffer.byteLength(pdfData),
      "Content-Type": "application/pdf",
      // 'Content-Disposition': `attachment; filename=report-${meeting_id}.pdf`,
      "Content-Disposition": `attachment; filename=report-${meetingId}.pdf`,
    });
    response.end(pdfData);
  });

  // dowloadWithStream(doc, response, input.data, meetingId);
};

export const createNewPDF = (input, response, meetingId) => {
  const doc = new PDFDocument({ size: "A4", margin: 50, bufferPages: true });
  generateHeader(doc);
  generateBody(doc, input.data);
  generateTableMember(doc, input);
  doc.end();

  let buffers = [];
  doc.on("data", buffers.push.bind(buffers));
  doc.on("end", () => {
    let pdfData = Buffer.concat(buffers);
    response.writeHead(200, {
      "Content-Length": Buffer.byteLength(pdfData),
      "Content-Type": "application/pdf",
      // 'Content-Disposition': `attachment; filename=report-${meeting_id}.pdf`,
      "Content-Disposition": `attachment; filename=report-${meetingId}.pdf`,
    });
    response.end(pdfData);
  });

  // dowloadWithStream(doc, response, input.data, meetingId);
};

function dowloadWithStream(doc, response, data, meetingId) {
  const { date } = data;

  const newDate = getDate(date);

  const dispotion = contentDisposition(
    `attachment; filename=report-${newDate}-${meetingId}.pdf`
  );

  response.setHeader("Content-disposition", dispotion);
  response.setHeader("Content-Type", "application/pdf");
  console.log(doc);
  doc.pipe(response);
}

function getFilename(name) {
  return /\s/.test(name) ? name.split(" ").join("_") : name;
}

function getDate(date) {
  return date.split("/").join("-");
}

function generateHeader(doc) {
  doc
    .font(process.env.PATH_SARABUN_TH)
    .image(process.env.PATH_ONE, 220, 10, { width: 170, align: "center" })
    .fontSize(20)
    .text(`รายงานการประชุม`, 70, 140, { align: "center" });
}
function generateBody(doc, data) {
  let date_arr = data.datetime.split(",")
  const start_date = date_arr[0].split("-")[0].trim()
  const end_date = date_arr[0].split("-")[1].trim()
  const start_time = date_arr[1].split("-")[0].trim()
  const end_time = date_arr[1].split("-")[1].trim()
  const type = data.type.toString() == "false" ? "การประชุมปกติ" : "การประชุมลับ"
  const record = data.record == false ? "ไม่มีการบันทึก" : "มีการบันทึก"
  doc
    .moveUp()
    .font(process.env.PATH_SARABUN_TH)
    .fontSize(14)
    .text(`ชื่อห้อง:`, 50, 180, { align: "left" })
    .fillColor("#444444")
    .text(data.subject, 105, 180, { align: "left" })

    .fillColor("#000000")
    .fontSize(14)
    .text(`ประเภท:`, 50, 200, { align: "left" })
    .fillColor("#444444")
    .text(`${type}`, 105, 200, { align: "left" })

    .fillColor("#000000")
    .fontSize(14)
    .text(`บันทึกวีดีโอ:`, 50, 220, { align: "left" })
    .fillColor("#444444")
    .text(`${record}`, 105, 220, { align: "left" })

    .fillColor("#000000")
    .fontSize(14)
    .text(`วันและเวลา: เริ่ม:`, 50, 240, { align: "left" })
    .fillColor("#444444")
    .text(`${start_date}     ${start_time}`, 130, 240, { align: "left" })
    
    .fillColor("#000000")
    .fontSize(14)    
    .text(`สิ้นสุด:`, 102, 260, { align: "left" })
    .fillColor("#444444")
    .text(`${end_date}     ${end_time}`, 130, 260, { align: "left" })

    .fillColor("#000000")
    .fontSize(14)    
    .text(`ระยะเวลาการประชุม: `, 102, 280, { align: "left" })
    .fillColor("#444444")
    .text(date_arr[2].substring(10), 190, 280, { align: "left" })

    // .fillColor("#000000")
    // .text(`จำนวนผู้เข้าร่วม: `, 50, 230, { align: "left" })
    // .fillColor("#444444")
    // .text(data.attendee, 130, 230, { align: "left" })

    .fontSize(20)
    .fillColor("#04449F")
    .text(`ตารางแสดงข้อมูลการเข้าประชุม`, 50, 300, { align: "center" });
}
function generateTableMember(doc, data) {
  createBgColor(doc, 345);
  doc
    .font(process.env.PATH_SARABUN_TH)
    .fillColor("#ffffff")
    .fontSize(16)
    .text("ลำดับที่", 30, 335, { width: 90, align: "center" })
    .text("ชื่อผู้เข้าประชุม", 130, 335, { width: 150, align: "center" })
    .text("เวลาที่เข้า", 310, 335, { width: 90, align: "center" })
    .text("ระยะเวลา", 450, 335, { width: 90, align: "center" });
  for (let i = 0; i < data.member.length; i++) {
    let item = data.member[i];
    if (item.no == "") {
      doc
        .moveDown(1)
        .fontSize(15)
        .font(process.env.PATH_SARABUN_TH)
        .fillColor("#000000")
        // .text(item.no, 70)
        // .moveUp()
        .text(item.name, 160)
        .moveUp()
        .text(item.timein + " - " + item.timeout, 330)
        .moveUp()
        .text(item.duration == null ? "null" : item.duration, 470)
        .moveUp();
    } else {
      doc
        .moveDown(1)
        .fontSize(15)
        .font(process.env.PATH_SARABUN_TH)
        .fillColor("#000000")
        .text(item.no, 70)
        .moveUp()
        .text(item.name, 110)
        .moveUp()
        .text(item.timein + " - " + item.timeout, 330)
        .moveUp()
        .text(item.duration == null ? "null" : item.duration, 470)
        .moveUp();
    }
  }
}

function createBgColor(doc, y) {
  doc
    .strokeColor("#086AAB")
    .lineWidth(40)
    .moveTo(50, y)
    .lineTo(550, y)
    .stroke();
}
