import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.NEXT_SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {

    const {
      name,
      email,
      link = '[Link nè]',
      subject,
      passPdf = 'passne',
      phone
    } = req.body;

    await sendgrid.send({
      to: email, // Your email where you'll receive emails
      from: "saigonhometeacher@gmail.com",
      subject,
      html: `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <style>
        body{
            background: #edfaff;
        }
    </style>
</head>
<body>
    <div data-template-type="html" style="height: auto; padding-bottom: 149px;" class="ui-sortable">
        <!--[if !mso]><!-->
        <!--<![endif]-->
        <!-- ====== Module : Intro ====== -->
        <table bgcolor="#F5F5F5" align="center" class="full" border="0" cellpadding="0" cellspacing="0" data-thumbnail="http://www.stampready.net/dashboard/editor/user_uploads/zip_uploads/2020/03/22/9jhlVUzudcB8NtbnMg67SvA5/StampReady/thumbnails/thumb-1.png" data-module="Module-1" data-bgcolor="M1 Bgcolor 1">
           <tbody>
              <tr>
                 <td>
                    <table bgcolor="#304050" align="center" width="750" class="margin-full ui-resizable" style="background-size: cover; background-position: center center; border-radius: 6px 6px 0px 0px; background-image: url(&quot;https://img.freepik.com/premium-photo/back-school-education-banner-background_8087-1192.jpg?size=626&ext=jpg&ga=GA1.1.107977802.1688566683&semt=sph" data-bgcolor="M1 Bgcolor 2" data-background="M1 Background 1">
                       <tbody>
                          <tr>
                             <td>
                                <table width="600" align="center" class="margin-pad" border="0" cellpadding="0" cellspacing="0">
                                   <tbody>
                                      <tr>
                                         <td height="70" style="font-size:0px">&nbsp;</td>
                                      </tr>
                                      <!-- image -->
                                      <tr>
                                         <td>
                                            <table align="center" class="res-full" border="0" cellpadding="0" cellspacing="0">
                                               <tbody>
                                                  <tr>
                                                     <td>
                                                        <table align="center" border="0" cellpadding="0" cellspacing="0">
                                                           <tbody>
                                                              <tr>
                                                                 <td>
                                                                    <img width="65" style="max-width: 65px; width: 100%; display: block; line-height: 0px; font-size: 0px; border: 0px;" src="http://www.stampready.net/dashboard/editor/user_uploads/zip_uploads/2020/03/22/9jhlVUzudcB8NtbnMg67SvA5/StampReady/img/module01-img02.png">
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
                                      <!-- image end -->
                                      <tr>
                                         <td height="15" style="font-size:0px">&nbsp;</td>
                                      </tr>
                                      <!-- title -->
                                      <tr>
                                         <td class="res-center" style="text-align: center; color: white; font-family: 'Raleway', Arial, Sans-serif; font-size: 26px; letter-spacing: 1.5px; word-break: break-word; font-weight: 300; padding-left: 1.5px;" data-color="M1 Title 1" data-size="M1 Title 1" data-max="36" data-min="16">
                                            CHÚNG TÔI LUÔN SÁNG TẠO 
                                         </td>
                                      </tr>
                                      <!-- title end -->
                                      <tr>
                                         <td height="12" style="font-size:0px">&nbsp;</td>
                                      </tr>
                                      <!-- title -->
                                      <tr>
                                         <td class="res-center" style="text-align: center; color: white; font-family: 'Raleway', Arial, Sans-serif; font-size: 35px; letter-spacing: 3px; word-break: break-word; font-weight: 800; padding-left: 3px;" data-color="M1 Title 2" data-size="M1 Title 2" data-max="45" data-min="25">
                                            TRONG CÁCH GIẢNG DẠY
                                         </td>
                                      </tr>
                                      <!-- title end -->
                                      <tr>
                                         <td height="30" style="font-size:0px" class="">&nbsp;</td>
                                      </tr>
                                   </tbody>
                                </table>
                             </td>
                          </tr>
                       </tbody>
                       <div class="ui-resizable-handle ui-resizable-s" style="z-index: 90;"></div>
                    </table>
                 </td>
              </tr>
           </tbody>
        </table>
        <!-- ====== Module : Texts ====== -->
        <table bgcolor="#F5F5F5" align="center" class="full selected-table" border="0" cellpadding="0" cellspacing="0" data-thumbnail="http://www.stampready.net/dashboard/editor/user_uploads/zip_uploads/2020/03/22/9jhlVUzudcB8NtbnMg67SvA5/StampReady/thumbnails/thumb-2.png" data-module="Module-2" data-bgcolor="M2 Bgcolor 1">
           <tbody>
              <tr>
                 <td>
                    <table bgcolor="white" width="750" align="center" class="margin-full ui-resizable" border="0" cellpadding="0" cellspacing="0" data-bgcolor="M2 Bgcolor 2">
                       <tbody>
                          <tr>
                             <td>
                                <table width="600" align="center" class="margin-pad" border="0" cellpadding="0" cellspacing="0">
                                   <tbody>
                                      <tr>
                                         <td height="70" style="font-size:0px">&nbsp;</td>
                                      </tr>
                                      <!-- HEADING -->
                                      <!-- subtitle -->
                                      <tr>
                                         <td class="res-center" style="text-align: center; color: #506070; font-family: 'Raleway', Arial, Sans-serif; font-size: 14px; letter-spacing: 1px; word-break: break-word; font-weight: 800;" data-color="M2 Subtitle 1" data-size="M2 Subtitle 1" data-max="24" data-min="5">
                                            CAMBRIDGE ACADEMY
                                         </td>
                                      </tr>
                                      <!-- subtitle end -->
                                      <tr>
                                         <td height="13" style="font-size:0px">&nbsp;</td>
                                      </tr>
                                      <!-- title -->
                                      <tr>
                                         <td class="res-center selected-element" style="text-align: center; color: #405060; font-family: 'Raleway', Arial, Sans-serif; font-size: 22px; letter-spacing: 0.7px; word-break: break-word" data-color="M2 Title 1" data-size="M2 Title 1" data-max="32" data-min="12" contenteditable="true">
                                            Luôn Phát Triển Và Đồng Hành Cùng Con Trẻ
                                         </td>
                                      </tr>
                                      <!-- title end -->
                                      <tr>
                                         <td height="15" style="font-size:0px">&nbsp;</td>
                                      </tr>
                                      <!-- image -->
                                      <tr>
                                         <td>
                                            <table align="center" class="res-full" border="0" cellpadding="0" cellspacing="0">
                                               <tbody>
                                                  <tr>
                                                     <td>
                                                        <table align="center" border="0" cellpadding="0" cellspacing="0">
                                                           <tbody>
                                                              <tr>
                                                                 <td>
                                                                    <img width="130" style="max-width: 130px; width: 100%; display: block; line-height: 0px; font-size: 0px; border: 0px;" src="http://www.stampready.net/dashboard/editor/user_uploads/zip_uploads/2020/03/22/9jhlVUzudcB8NtbnMg67SvA5/StampReady/img/ui-line-2.png">
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
                                      <!-- image end -->
                                      <!-- HEADING end -->
                                      <tr>
                                         <td height="30" style="font-size:0px">&nbsp;</td>
                                      </tr>
                                      <!-- paragraph -->
                                      <tr>
                                         <td class="res-center" style="text-align: left; color: #607080; font-family: 'Nunito', Arial, Sans-serif; font-size: 16px; letter-spacing: 0.4px; line-height: 23px; word-break: break-word" data-color="M2 Paragraph 1" data-size="M2 Paragraph 1" data-max="26" data-min="6">
                                              Kính gửi Quý phụ huynh (
                                                <span style="text-align: center; color: #405060; font-family: 'Raleway', Arial, Sans-serif; font-size: 22px; letter-spacing: 0.7px; word-break: break-word">
                                                   ${name} - ${phone}
                                                </span>),
                                              Cambridge Academy xin cảm ơn quý phụ huynh đã dành thời gian quan tâm đến các lớp học. Chúng tôi xin gửi đến quý phụ huynh bài kiểm tra năng lực, quý phụ huynh vui lòng nhập mật khẩu 
                                             <span style="color: #00bb9d; font-family: 'Nunito', Arial, Sans-serif; font-size: 16px; letter-spacing: 0.7px; text-decoration: none; word-break: break-word;" data-color="M2 Link 1" data-size="M2 Link 1" data-max="26" data-min="6">
                                                ${link}
                                              </span>
                                             để tải về. Sau khi hoàn thành bài, kính nhờ phụ huynh chụp hình bài kiểm tra và phản hồi trong email này.
                                              Bộ phận chuyên môn sẽ chủ động liên hệ phụ huynh để sắp xếp buổi kiểm tra năng lực cho con một cách chi tiết và đầy đủ. Vì hệ thống tự động nên mong quý phụ huynh thông cảm và bỏ qua nếu có sai sót xảy ra.
                                              Chúng tôi mong được phục vụ Quý phụ huynh và đồng hành cùng các con trên chặng đường chinh phục tri thức.
                                          </td>
                                      </tr>
                                      <!-- paragraph end -->
                                      <tr>
                                         <td height="23" class="res-center" style="text-align: left; color: #607080; font-family: 'Nunito', Arial, Sans-serif; font-size: 16px; letter-spacing: 0.4px; line-height: 23px; word-break: break-word" data-color="M2 Paragraph 1" data-size="M2 Paragraph 1" data-max="26" data-min="6">Trân Trọng</td>
                                      </tr>

                                      <tr>
                                          <td height="23" style="font-size:0px">&nbsp;</td>
                                     </tr>

                                       <tr>
                                          <td class="res-center" style="text-align: left; color: #607080; font-family: 'Nunito', Arial, Sans-serif; font-size: 16px; letter-spacing: 0.4px; line-height: 23px; word-break: break-word" data-color="M2 Paragraph 1" data-size="M2 Paragraph 1" data-max="26" data-min="6">
                                             Dear Parents,
                                             Cambridge Academy would like to express our gratitude for your interest in our classes. We are sending you a competency assessment, and kindly request that you enter the password 
                                             <span style="color: #00bb9d; font-family: 'Nunito', Arial, Sans-serif; font-size: 16px; letter-spacing: 0.7px; text-decoration: none; word-break: break-word;" data-color="M2 Link 1" data-size="M2 Link 1" data-max="26" data-min="6">
                                                ${passPdf}
                                             </span>
                                             to download it. Once completed, we kindly ask parents to take a photo of the assessment and provide feedback in this email.
                                             Our specialized team will proactively contact you to arrange a detailed and comprehensive competency assessment session for your child. We apologize in advance for any potential errors that may occur due to the automated system.
                                             We look forward to serving you and accompanying your children on their journey to conquer knowledge.
                                          </td>
                                       </tr>

                                       <tr>
                                          <td height="23" class="res-center" style="text-align: left; color: #607080; font-family: 'Nunito', Arial, Sans-serif; font-size: 16px; letter-spacing: 0.4px; line-height: 23px; word-break: break-word" data-color="M2 Paragraph 1" data-size="M2 Paragraph 1" data-max="26" data-min="6">Best regards,</td>
                                       </tr>
                                    <!-- paragraph end -->
                                    <tr>
                                       <td height="23" style="font-size:0px">&nbsp;</td>
                                    </tr>
                                   </tbody>
                                </table>
                             </td>
                          </tr>
                       </tbody>
                       <div class="ui-resizable-handle ui-resizable-s" style="z-index: 90;"></div>
                    </table>
                 </td>
              </tr>
           </tbody>
        </table>
     </div>
</body>
</html>
      `
    });
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
