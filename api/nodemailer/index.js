/*
Grab your SMTP credentials:
SMTP hostname: smtp.mailgun.org
Port: 587 (recommended)
Username: postmaster@support.burnittraining.com
Default password: 1b031c772086802cccc3e6f05b805316-53c13666-50284c21
Manage SMTP credentials
*/

const nodemailer = require('nodemailer');

async function recover(email, pass) {
  let transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 587,
    secure: false,
    auth: {
      user: 'apikey',
      pass: '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',
    }
  });

  let info = await transporter.sendMail({
    from: '"MDRN Training" <support@mdrn-training.com>',
    to: `${email}`,
    subject: 'Password recovering',
    html: `
      <img src="cid:logo@burnittraining.com" alt="" width="90" style="width:90px;max-width:90px;min-width:90px; display: block; margin: 0 auto;">
      <h1 style="color:#000; text-align:center; margin: 0; font-size: 32px; font-weight: 700; letter-spacing: -1px; line-height: 48px; font-family: Helvetica, Arial, sans-serif;">Password was changed</h1>
      <img src="cid:burnit@burnittraining.com" alt="" width="250" style="width:250px;max-width:250px;min-width:250px; display:block; margin:0 auto;">
      <h2 bgcolor="#103e70" color="#fff" style="margin:0 auto; text-align:center; width:300px; background:#103e70; color:#fff; font-size:14px; padding: 10px 0 0; display: block; font-family: Helvetica, Arial, sans-serif; ">Your password:</h2>
      <h3 bgcolor="#103e70" color="#fff" style="margin:0 auto; text-align:center; width:300px; background:#103e70; color:#fff; font-size:20px; letter-spacing: 2px; padding: 10px 0; display: block; font-family: Helvetica, Arial, sans-serif; font-weight: 700; ">${pass}</h3>
      <a href="https://member.burnittraining.com/users/sign_in" target="_blank" style="margin:0 auto; text-align:center; display: block; padding: 16px 36px; font-family: Helvetica, Arial, sans-serif; font-size: 16px; color: #103e70; text-decoration: underline; border-radius: 6px;">Go To Login page</a>
    `,
    attachments: [
      {
        filename: 'logo.png',
        path: `${__dirname}/img/logo.png`,
        cid: 'logo@burnittraining.com'
      },
      {
        filename: 'burnit.png',
        path: `${__dirname}/img/burnit.png`,
        cid: 'burnit@burnittraining.com'
      }
    ]
  });
  return info;
}
async function welcome(email, pass, name) {
  let transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 587,
    secure: false,
    auth: {
      user: 'apikey',
      pass: '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',
    },
  });

  let info = await transporter.sendMail({
    from: '"MDRN" <support@mdrn-training.com>',
    to: `${email}`,
    subject: 'Welcome to MDRN',
    html: `
      <p style="text-align: center;"> <img src="cid:logo@burnittraining.com" alt="" width="90" style="width:90px;max-width:90px;min-width:90px; display: inline-block;"></p>
      <h1 style="color:#000; text-align:center; margin: 0; font-size: 32px; font-weight: 700; letter-spacing: -1px; line-height: 48px; font-family: Helvetica, Arial, sans-serif;">Bienvenu, vous êtes désormais membre de la famille MDRN Training!</h1>
      <h2 style="color:#000; text-align:center; margin: 0; font-size: 28px; font-weight: 700; letter-spacing: -1px; line-height: 48px; font-family: Helvetica, Arial, sans-serif;">Bonjour! ${name}</h2>
      <table width="100%" style="text-align: center; border-collapse: collapse;">
        <tr>
          <td style="border: none; padding:0;" colspan="3">
            <center><img src="cid:burnit@burnittraining.com" alt="" width="250" style="width:250px;max-width:250px;min-width:250px; display:block;"></center>
          </td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td width="300px" bgcolor="#103e70" color="#fff" style="padding: 10px 0; border: none; margin:0; text-align:center; width:300px; min-width:300px; max-width:300px; background:#103e70; color:#fff; font-size:14px; font-family: Helvetica, Arial, sans-serif; ">Mot de passe:</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td width="300px" bgcolor="#103e70" color="#fff" style="border: none; margin:0; display: inline-block; text-align:center; width:300px; min-width:300px; max-width:300px; background:#103e70; color:#fff; font-size:20px; letter-spacing: 2px; padding: 10px 0; font-family: Helvetica, Arial, sans-serif; font-weight: 700; ">${pass}</td>
          <td>&nbsp;</td>
        </tr>
        <tr>
          <td colspan="3" style="text-align: center;">
            <a href="https://member.burnittraining.com/users/sign_in" target="_blank" style="text-align:center; display: block; padding: 16px 36px; font-family: Helvetica, Arial, sans-serif; font-size: 16px; color: #103e70; text-decoration: underline; border-radius: 6px;">Accédez à votre espace personnel</a>
          </td>
        </tr>
      </table>
      <p style="color: #000000; text-align: center; width: 100%; font-size: 16px; font-weight: 400; font-family: Helvetica, Arial, sans-serif;">En rejoignant la famille MDRN Training vous avez déjà fait le premier pas vers un style de vie plus sain.</p>
      <p style="color: #000000; text-align: center; width: 100%; font-size: 16px; font-weight: 400; font-family: Helvetica, Arial, sans-serif;">Vous avez eu le courage d’investir en vous et dans le cas où vous ne le sauriez pas...</p>
      <p style="color: #000000; text-align: center; width: 100%; font-size: 18px; font-weight: 700; font-family: Helvetica, Arial, sans-serif;">Nous sommes fiers de vous.</p>
      <p style="width: 100%; line-height: 30px; height: 30px;">&nbsp;</p>
      <center>
        <table>
          <tr>
            <td></td>
            <td style="width: 600px; max-width: 100%;">
              <p style="color: #000000; text-align: left; width: 100%; font-size: 14px; font-weight: 400; font-family: Helvetica, Arial, sans-serif;">En parlant d’investissement…</p>
              <p style="color: #000000; text-align: left; width: 100%; font-size: 14px; font-weight: 700; font-family: Helvetica, Arial, sans-serif;">Si vous avez opté pour l’option du plan personnalisé sur-mesure, vous avez fait le bon choix.</p>
              <p style="color: #000000; text-align: left; width: 100%; font-size: 14px; font-weight: 700; font-family: Helvetica, Arial, sans-serif;">Ce plan étant 100% personnalisé, veuillez octroyer à Chris un délai de 48 à 72 heures afin de tout vous préparer et de vous envoyer votre menu par e-mail.</p>
              <p style="color: #000000; text-align: left; width: 100%; font-size: 14px; font-weight: 400; font-family: Helvetica, Arial, sans-serif;">Voici la marche à suivre pour recevoir votre plan personnalisé:</p>
              <p style="color: #000000; text-align: left; width: 100%; font-size: 14px; font-weight: 400; font-family: Helvetica, Arial, sans-serif;">1. <b>Connectez-vous à votre compte.</b> <br> 2. Rendez-vous dans la rubrique “plan personnalisé” et répondez aux questions. <br> 3. Commencez votre training pendant que Chris s'occupe de votre menu.</p>
              <p style="color: #000000; text-align: center; width: 100%; font-size: 14px; font-weight: 400; font-family: Helvetica, Arial, sans-serif;">Nous avons hâte de voir vos résultats!</p>
              <p style="color: #000000; text-align: center; width: 100%; font-size: 14px; font-weight: 400; font-family: Helvetica, Arial, sans-serif;">Une question?<br>Contactez-vous par email: <a href="mailto:support@mdrn-training.com" style="color: #000; text-decoration: underline;">support@mdrn-training.com</a></p>
            </td>
            <td></td>
          </tr>
        </table>
      </center>
    `,
    attachments: [
      {
        filename: 'logo.png',
        path: `${__dirname}/img/logo.png`,
        cid: 'logo@burnittraining.com'
      },
      {
        filename: 'burnit.png',
        path: `${__dirname}/img/burnit.png`,
        cid: 'burnit@burnittraining.com'
      }
    ]
  });
  return info;
}
async function errorlog(data) {
  let transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 587,
    secure: false,
    auth: {
      user: 'apikey',
      pass: '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',
    }
  });

  let info = await transporter.sendMail({
    from: '"ERROR Burnit Training" <support@burnittraining.com>',
    to: 'onyx18121990@gmail.com',
    subject: 'Password recovering',
    html: JSON.stringify(data)
  });
  return info;
}

module.exports.recover = recover;
module.exports.welcome = welcome;