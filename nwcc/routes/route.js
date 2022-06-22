const express = require('express')
const expressLayouts = require('express-ejs-layouts');
const router = express.Router();

// const { check,validationResult} = require('express-validator')

// const db = require('./../db')

router.use(expressLayouts);

router.get('/',(req ,res) => {
  res.render('main');
  //메인페이지 지정
  });
//로그인
router.get('/nowon_login_id',(req ,res) => {
  res.render("nowon_login_id");
});
router.get('/nowon_login_psw',(req ,res) => {
  res.render("nowon_login_psw");
});
router.get('/nowon_login',(req ,res) => {
  res.render("nowon_login");
});
router.get('/nowon_signup',(req ,res) => {
  res.render("nowon_signup");
});
//문화원 소개
router.get('/nowon_introText',(req ,res) => {
  res.render("nowon_introText");
});
router.get('/nowon_introIntro',(req ,res) => {
  res.render("nowon_introIntro");
});
router.get('/nowon_introBOD',(req ,res) => {
  res.render("nowon_introBOD");
});
router.get('/nowon_introFacility',(req ,res) => {
  res.render("nowon_introFacility");
});
router.get('/nowon_introHistory',(req ,res) => {
  res.render("nowon_introHistory");
});
router.get('/nowon_introMap',(req ,res) => {
  res.render("nowon_introMap");
});
router.get('/nowon_introOrganiz',(req ,res) => {
  res.render("nowon_introOrganiz");
});

//문화 행사 /대관
router.get('/event_culture',(req ,res) => {
  res.render("event_culture");
});

//문화강좌
router.get('/class',(req ,res) => {
  res.render("class");
});
router.get('/class_guide',(req ,res) => {
  res.render("class_guide");
});
router.get('/class_info',(req ,res) => {
  res.render("class_info");
});

//참여마당
router.get('/notice',(req ,res) => {
  res.render("notice");
});
router.get('/noti_607',(req ,res) => {
  res.render("noti_607");
});
router.get('/noti_608',(req ,res) => {
  res.render("noti_608");
});
router.get('/event',(req ,res) => {
  res.render("event");
});
router.get('/event_4',(req ,res) => {
  res.render("event_4");
});
router.get('/pressrelease',(req ,res) => {
  res.render("pressrelease");
});

//노원아카이브
router.get('/vision',(req ,res) => {
  res.render("vision");
});
router.get('/nongyo',(req ,res) => {
  res.render("nongyo");
});
router.get('/history_Wolgye',(req ,res) => {
  res.render("history_Wolgye");
});
router.get('/history_Sanggye',(req ,res) => {
  res.render("history_Sanggye");
});
router.get('/history_nowon',(req ,res) => {
  res.render("history_nowon");
});
router.get('/history_info',(req ,res) => {
  res.render("history_info");
});

module.exports = router;
