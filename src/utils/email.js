import nodemailer from "nodemailer";
import CustomError from "@src/utils/CustomError";
import ics from "ics";

export const sendGenerationCodeMail = async (email, code) => {
  try {
    const transporter = createTransport();

    const mailOptions = {
      from: '"oneconference@inet.co.th" <oneconference@inet.co.th>',
      // from: 'oneconference.inet.co.th', // sender
      to: email, // list of receivers
      subject: "Activate Code", // Mail subject,
      attachments: [
        {
          fileName: "logo1.png",
          path: "src/assets/profile/logo1.png",
          cid: "logo1",
        },
        {
          fileName: "logo2.png",
          path: "src/assets/profile/logo2.png",
          cid: "logo2",
        },
      ],
      html: `<html>

      <head></head>
      
      <body>
          <title></title>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
          <meta name="viewport" content="width=device-width,initial-scale=1">
          <!--[if mso]><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch><o:AllowPNG/></o:OfficeDocumentSettings></xml><![endif]-->
          <style>
              * {
                  box-sizing: border-box
              }
      
              body {
                  margin: 0;
                  padding: 0
              }
      
              a[x-apple-data-detectors] {
                  color: inherit !important;
                  text-decoration: inherit !important
              }
      
              #MessageViewBody a {
                  color: inherit;
                  text-decoration: none
              }
      
              p {
                  line-height: inherit
              }
      
              .desktop_hide,
              .desktop_hide table {
                  mso-hide: all;
                  display: none;
                  max-height: 0;
                  overflow: hidden
              }
      
              @media (max-width:660px) {
      
                  .fullMobileWidth,
                  .row-content {
                      width: 100% !important
                  }
      
                  .mobile_hide {
                      display: none
                  }
      
                  .stack .column {
                      width: 100%;
                      display: block
                  }
      
                  .mobile_hide {
                      min-height: 0;
                      max-height: 0;
                      max-width: 0;
                      overflow: hidden;
                      font-size: 0
                  }
      
                  .desktop_hide,
                  .desktop_hide table {
                      display: table !important;
                      max-height: none !important
                  }
              }
          </style>
          <table class="nl-container" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"
              style="mso-table-lspace:0;mso-table-rspace:0;background-color:#f8f8f9">
              <tbody>
                  <tr>
                      <td>
                          <table class="row row-1" align="center" width="100%" border="0" cellpadding="0" cellspacing="0"
                              role="presentation" style="mso-table-lspace:0;mso-table-rspace:0;background-color:#0068a5">
                              <tbody>
                                  <tr>
                                      <td>
                                          <table class="row-content stack" align="center" border="0" cellpadding="0"
                                              cellspacing="0" role="presentation"
                                              style="mso-table-lspace:0;mso-table-rspace:0;background-color:#1aa19c;color:#000;width:640px"
                                              width="640">
                                              <tbody>
                                                  <tr>
                                                      <td class="column column-1" width="100%"
                                                          style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;padding-top:0;padding-bottom:0;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                                          <table class="divider_block block-1" width="100%" border="0"
                                                              cellpadding="0" cellspacing="0" role="presentation"
                                                              style="mso-table-lspace:0;mso-table-rspace:0">
                                                              <tbody>
                                                                  <tr>
                                                                      <td class="pad">
                                                                          <div class="alignment" align="center">
                                                                              <table border="0" cellpadding="0"
                                                                                  cellspacing="0" role="presentation"
                                                                                  width="100%"
                                                                                  style="mso-table-lspace:0;mso-table-rspace:0">
                                                                                  <tbody>
                                                                                      <tr>
                                                                                          <td class="divider_inner"
                                                                                              style="font-size:1px;line-height:1px;border-top:4px solid #0068a5">
                                                                                              <span>&hairsp;</span>
                                                                                          </td>
                                                                                      </tr>
                                                                                  </tbody>
                                                                              </table>
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </tbody>
                                                          </table>
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                          <table class="row row-2" align="center" width="100%" border="0" cellpadding="0" cellspacing="0"
                              role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                              <tbody>
                                  <tr>
                                      <td>
                                          <table class="row-content stack" align="center" border="0" cellpadding="0"
                                              cellspacing="0" role="presentation"
                                              style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff;color:#000;width:640px"
                                              width="640">
                                              <tbody>
                                                  <tr>
                                                      <td class="column column-1" width="100%"
                                                          style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;padding-top:0;padding-bottom:0;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                                          <table class="image_block block-1" width="100%" border="0"
                                                              cellpadding="0" cellspacing="0" role="presentation"
                                                              style="mso-table-lspace:0;mso-table-rspace:0">
                                                              <tbody>
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="padding-left:40px;padding-right:40px;width:100%">
                                                                          <div class="alignment" align="center"
                                                                              style="line-height:10px">
                                                                              <img class="fullMobileWidth" src="cid:logo1"
                                                                                  style="display:block;height:auto;border:0;width:288px;max-width:100%"
                                                                                  width="288" alt="I'm an image"
                                                                                  title="I'm an image">
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </tbody>
                                                          </table>
                                                          <table class="text_block block-2" width="100%" border="0"
                                                              cellpadding="0" cellspacing="0" role="presentation"
                                                              style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word">
                                                              <tbody>
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="padding-bottom:10px;padding-left:40px;padding-right:40px;padding-top:10px">
                                                                          <div style="font-family:sans-serif">
                                                                              <div style="font-size:12px;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif"
                                                                                  class="">
                                                                                  <p
                                                                                      style="margin:0;font-size:18px;text-align:center;mso-line-height-alt:21.599999999999998px">
                                                                                      <span
                                                                                          style="font-size:18px;color:#2b303a;"><strong>เปิดใช้งานการประชุมของคุณด้วยรหัสเปิดใช้งาน</strong></span>
                                                                                  </p>
                                                                                  <p
                                                                                      style="margin:0;font-size:18px;text-align:center;mso-line-height-alt:21.599999999999998px">
                                                                                      <span
                                                                                          style="font-size:18px;color:#2b303a;"><strong>Activate
                                                                                              your conference with the
                                                                                              activation code</strong></span>
                                                                                  </p>
                                                                              </div>
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </tbody>
                                                          </table>
                                                          <table class="text_block block-3" width="100%" border="0"
                                                              cellpadding="0" cellspacing="0" role="presentation"
                                                              style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word">
                                                              <tbody>
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="padding-bottom:10px;padding-left:40px;padding-right:40px;padding-top:10px">
                                                                          <div style="font-family:sans-serif">
                                                                              <div style="font-size:12px;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif;mso-line-height-alt:18px;color:#555;line-height:1.5"
                                                                                  class="">
                                                                                  <p
                                                                                      style="margin:0;font-size:13px;text-align:center;mso-line-height-alt:19.5px">
                                                                                      <span
                                                                                          style="color:#808389;font-size:13px;">รหัสเปิดใช้งานมีอายุ
                                                                                          7 วัน
                                                                                          กรุณาเปิดใช้งานภายในระยะเวลาดังกล่าว</span>
                                                                                  </p>
                                                                                  <p
                                                                                      style="margin:0;font-size:13px;text-align:center;mso-line-height-alt:19.5px">
                                                                                      <span
                                                                                          style="color:#808389;font-size:13px;">The
                                                                                          activation code is valid for 7 days.
                                                                                          Please activate within that
                                                                                          period.</span>
                                                                                  </p>
                                                                              </div>
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </tbody>
                                                          </table>
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                          <table class="row row-3" align="center" width="100%" border="0" cellpadding="0" cellspacing="0"
                              role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                              <tbody>
                                  <tr>
                                      <td>
                                          <table class="row-content stack" align="center" border="0" cellpadding="0"
                                              cellspacing="0" role="presentation"
                                              style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff;color:#000;border-radius:0;width:640px"
                                              width="640">
                                              <tbody>
                                                  <tr>
                                                      <td class="column column-1" width="100%"
                                                          style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;padding-top:0;padding-bottom:0;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                                          <div class="spacer_block"
                                                              style="height:25px;line-height:25px;font-size:1px">&hairsp;
                                                          </div>
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                          <table class="row row-4" align="center" width="100%" border="0" cellpadding="0" cellspacing="0"
                              role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                              <tbody>
                                  <tr>
                                      <td>
                                          <table class="row-content stack" align="center" border="0" cellpadding="0"
                                              cellspacing="0" role="presentation"
                                              style="mso-table-lspace:0;mso-table-rspace:0;background-color:#f3fafa;color:#000;width:640px"
                                              width="640">
                                              <tbody>
                                                  <tr>
                                                      <td class="column column-1" width="100%"
                                                          style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;border-left:30px solid #fff;border-right:30px solid #fff;vertical-align:top;padding-top:0;padding-bottom:0;border-top:0;border-bottom:0">
                                                          <table class="divider_block block-1" width="100%" border="0"
                                                              cellpadding="0" cellspacing="0" role="presentation"
                                                              style="mso-table-lspace:0;mso-table-rspace:0">
                                                              <tbody>
                                                                  <tr>
                                                                      <td class="pad">
                                                                          <div class="alignment" align="center">
                                                                              <table border="0" cellpadding="0"
                                                                                  cellspacing="0" role="presentation"
                                                                                  width="100%"
                                                                                  style="mso-table-lspace:0;mso-table-rspace:0">
                                                                                  <tbody>
                                                                                      <tr>
                                                                                          <td class="divider_inner"
                                                                                              style="font-size:1px;line-height:1px;border-top:4px solid #0068a5">
                                                                                              <span>&hairsp;</span>
                                                                                          </td>
                                                                                      </tr>
                                                                                  </tbody>
                                                                              </table>
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </tbody>
                                                          </table>
                                                          <table class="text_block block-2" width="100%" border="0"
                                                              cellpadding="0" cellspacing="0" role="presentation"
                                                              style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word">
                                                              <tbody>
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="padding-bottom:5px;padding-left:10px;padding-right:10px;padding-top:10px">
                                                                          <div style="font-family:sans-serif">
                                                                              <div style="font-size:12px;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif"
                                                                                  class="">
                                                                                  <p
                                                                                      style="margin:0;font-size:14px;text-align:center;mso-line-height-alt:16.8px">
                                                                                      <span
                                                                                          style="color:#2b303a;font-size:14px;"><strong>รหัสเปิดใช้งาน</strong></span>
                                                                                  </p>
                                                                                  <p
                                                                                      style="margin:0;font-size:14px;text-align:center;mso-line-height-alt:16.8px">
                                                                                      <span
                                                                                          style="color:#2b303a;font-size:14px;"><strong>Activation
                                                                                              code</strong></span>
                                                                                  </p>
                                                                              </div>
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </tbody>
                                                          </table>
                                                          <table class="text_block block-3" width="100%" border="0"
                                                              cellpadding="0" cellspacing="0" role="presentation"
                                                              style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word">
                                                              <tbody>
                                                                  <tr>
                                                                      <td class="pad" style="padding-bottom:32px">
                                                                          <div style="font-family:sans-serif">
                                                                              <div style="font-size:12px;mso-line-height-alt:14.399999999999999px;color:#555;line-height:1.2;font-family:Montserrat,Trebuchet MS,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Tahoma,sans-serif"
                                                                                  class="">
                                                                                  <p
                                                                                      style="margin:0;font-size:16px;text-align:center;mso-line-height-alt:19.2px">
                                                                                      <span
                                                                                          style="color:#000000;font-size:26px;"><span
                                                                                              style=""><strong>${code}</strong></span></span>
                                                                                  </p>
                                                                              </div>
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </tbody>
                                                          </table>
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                          <table class="row row-5" align="center" width="100%" border="0" cellpadding="0" cellspacing="0"
                              role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                              <tbody>
                                  <tr>
                                      <td>
                                          <table class="row-content stack" align="center" border="0" cellpadding="0"
                                              cellspacing="0" role="presentation"
                                              style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff;color:#000;width:640px"
                                              width="640">
                                              <tbody>
                                                  <tr>
                                                      <td class="column column-1" width="100%"
                                                          style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;padding-top:0;padding-bottom:0;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                                          <table class="button_block block-1" width="100%" border="0"
                                                              cellpadding="0" cellspacing="0" role="presentation"
                                                              style="mso-table-lspace:0;mso-table-rspace:0">
                                                              <tbody>
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="padding-bottom:5px;padding-left:10px;padding-right:10px;padding-top:5px;text-align:center">
                                                                          <div class="alignment" align="center">
                                                                              <!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${process.env.DOMAIN}" style="height:32px;width:111px;v-text-anchor:middle;" arcsize="188%" stroke="false" fillcolor="#0068a5"><w:anchorlock/><v:textbox inset="0px,0px,0px,0px"><center style="color:#ffffff; font-family:Tahoma, sans-serif; font-size:11px"><![endif]-->
                                                                              <a href="${process.env.DOMAIN}" target="_blank"
                                                                                  style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#0068a5;border-radius:60px;width:auto;border-top:0px solid transparent;font-weight:400;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent;padding-top:5px;padding-bottom:5px;font-family:Montserrat, Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;text-align:center;mso-border-alt:none;word-break:keep-all;"><span
                                                                                      style="padding-left:20px;padding-right:20px;font-size:11px;display:inline-block;letter-spacing:normal;"><span
                                                                                          style="margin: 0; word-break: break-word; line-height: 22px;"
                                                                                          dir="ltr"><strong>Activate
                                                                                              Code</strong></span></span></a>
                                                                              <!--[if mso]></center></v:textbox></v:roundrect><![endif]-->
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </tbody>
                                                          </table>
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                          <table class="row row-6" align="center" width="100%" border="0" cellpadding="0" cellspacing="0"
                              role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                              <tbody>
                                  <tr>
                                      <td>
                                          <table class="row-content stack" align="center" border="0" cellpadding="0"
                                              cellspacing="0" role="presentation"
                                              style="mso-table-lspace:0;mso-table-rspace:0;background-color:#fff;border-radius:0;color:#000;width:640px"
                                              width="640">
                                              <tbody>
                                                  <tr>
                                                      <td class="column column-1" width="25%"
                                                          style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                                          <table class="image_block block-2" width="100%" border="0"
                                                              cellpadding="0" cellspacing="0" role="presentation"
                                                              style="mso-table-lspace:0;mso-table-rspace:0">
                                                              <tbody>
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="width:100%;padding-right:0;padding-left:0;padding-top:5px;padding-bottom:5px">
                                                                          <div class="alignment" align="center"
                                                                              style="line-height:10px"><img src="cid:logo2"
                                                                                  style="display:block;height:auto;border:0;width:80px;max-width:100%"
                                                                                  width="80"></div>
                                                                      </td>
                                                                  </tr>
                                                              </tbody>
                                                          </table>
                                                      </td>
                                                      <td class="column column-2" width="75%"
                                                          style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;vertical-align:top;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                                          <table class="paragraph_block block-2" width="100%" border="0"
                                                              cellpadding="0" cellspacing="0" role="presentation"
                                                              style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word">
                                                              <tbody>
                                                                  <tr>
                                                                      <td class="pad"
                                                                          style="padding-bottom:15px;padding-left:10px;padding-right:10px;padding-top:15px">
                                                                          <div
                                                                              style="color:#9b9b9b;direction:ltr;font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:12px;font-weight:400;letter-spacing:0;line-height:120%;text-align:left;mso-line-height-alt:14.399999999999999px">
                                                                              <p style="margin:0;margin-bottom:16px">บริษัท
                                                                                  อินเทอร์เน็ตประเทศไทย จำกัด (มหาชน)</p>
                                                                              <p style="margin:0;margin-bottom:16px">1768
                                                                                  อาคารไทยซัมมิท ทาวเวอร์ ชั้น 10 - 12 และ
                                                                                  IT&nbsp;</p>
                                                                              <p style="margin:0">ถนนเพชรบุรีตัดใหม่
                                                                                  แขวงบางกะปิ เขตห้วยขวางกรุงเทพมหานคร 10310
                                                                              </p>
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </tbody>
                                                          </table>
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                          <table class="row row-7" align="center" width="100%" border="0" cellpadding="0" cellspacing="0"
                              role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                          </table>
      
                          <table class="row row-9 desktop_hide" align="center" width="100%" border="0" cellpadding="0"
                              cellspacing="0" role="presentation"
                              style="mso-table-lspace:0;mso-table-rspace:0;mso-hide:all;display:none;max-height:0;overflow:hidden">
                              <tbody>
                                  <tr>
                                      <td>
                                          <table class="row-content stack" align="center" border="0" cellpadding="0"
                                              cellspacing="0" role="presentation"
                                              style="mso-table-lspace:0;mso-table-rspace:0;mso-hide:all;display:none;max-height:0;overflow:hidden;color:#333;width:640px"
                                              width="640">
                                              <tbody>
                                                  <tr>
                                                      <td class="column column-1" width="100%"
                                                          style="mso-table-lspace:0;mso-table-rspace:0;font-weight:400;text-align:left;padding-left:30px;padding-right:30px;vertical-align:top;padding-top:60px;padding-bottom:60px;border-top:0;border-right:0;border-bottom:0;border-left:0">
                                                          <table class="text_block block-1" width="100%" border="0"
                                                              cellpadding="10" cellspacing="0" role="presentation"
                                                              style="mso-table-lspace:0;mso-table-rspace:0;word-break:break-word;mso-hide:all;display:none;max-height:0;overflow:hidden">
                                                              <tbody>
                                                                  <tr>
                                                                      <td class="pad">
                                                                          <div style="font-family:Arial,sans-serif">
                                                                              <div style="font-family:Arial,'Helvetica Neue',Helvetica,sans-serif;font-size:12px;mso-line-height-alt:21.6px;color:#9b9b9b;line-height:1.8"
                                                                                  class="">
                                                                                  <p
                                                                                      style="margin:0;font-size:18px;text-align:center;mso-line-height-alt:21.6px">
                                                                                      <span style="font-size:12px;"> <a
                                                                                              rel="noopener"
                                                                                              href="https://cmtd1.com/u/443/48713655f51c8ae13ec873cab33c4be943e0ae121c893d91"
                                                                                              title="View in browser"
                                                                                              style="text-decoration: underline; color: #9b9b9b;">Unsubscribe</a></span>
                                                                                  </p>
                                                                              </div>
                                                                          </div>
                                                                      </td>
                                                                  </tr>
                                                              </tbody>
                                                          </table>
                                                      </td>
                                                  </tr>
                                              </tbody>
                                          </table>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                          <table class="row row-10" align="center" width="100%" border="0" cellpadding="0" cellspacing="0"
                              role="presentation" style="mso-table-lspace:0;mso-table-rspace:0">
                          </table>
      
                      </td>
                  </tr>
              </tbody>
          </table><!-- End -->
          <!--  -->
      </body>
      
      </html>`,
    };

    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.log(error);
    throw new CustomError(502, "Failed to sending email generated code");
  }
};

const createTransport = () => {
  let transporter = nodemailer.createTransport({
    host: process.env.MAILGATEWAY,
    port: 25,
    secure: false,
    tls: {
      rejectUnauthorized: false,
    },
  });

  return transporter;
};
