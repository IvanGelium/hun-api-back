//Стандартные значения для переменных

const defTextWithTags =
  '<h1>Сокрушительная скука</h1><br> <p>Крис Миллс</p> <h2>Глава 1: Тёмная ночь</h2> <p>Это была тёмная ночь. Где-то кричала сова. Дождь обрушился на ...</p> <h2>Глава 2: Вечное молчание</h2> <br> <p>Наш главный герой ничего не мог, когда шёпот из тёмной фигуры ...</p> <h3>Призрак говорит</h3> <p> Прошло ещё несколько часов, когда внезапно призрак выпрямился и воскликнул: «Пожалуйста, помилуй мою душу!» </p> <br> <ol> <li>Очистите чеснок от кожуры и крупно нарежьте.</li> <li>Удалите стебель и семена у перца; крупно нарежьте перец.</li>   <li>Добавьте все ингредиенты в пищевой комбайн.</li>   <li>  <br>    Измельчите все ингредиенты до состояния пасты.  <br>  <ul><br><br><br><br><br>      <li>Если вы хотите "грубый" хумус, измельчайте пару минут.</li>      <li>Если вам нужен гладкий хумус, измельчайте дольше.</li> <br>   </ul>  </li><br><br><br></ol>'
const defTextWithKeys =
  '<p>Добрый день <strong>%applicant.name%</strong></p> <br> <h1>Сокрушительная скука</h1><br> <p>Крис Миллс</p> <h2>Глава 1: Тёмная ночь</h2> <p>Это была тёмная ночь. Где-то кричала сова. Дождь обрушился на ...</p> <h2>Глава 2: Вечное молчание</h2> <br> <p>Наш главный герой ничего не мог, когда шёпот из тёмной фигуры ...</p> <h3>Призрак говорит</h3> <p> Прошло ещё несколько часов, когда внезапно призрак выпрямился и воскликнул: «Пожалуйста, помилуй мою душу!» </p> <br> <ol> <li>Очистите чеснок от кожуры и крупно нарежьте.</li> <li>Удалите стебель и семена у перца; крупно нарежьте перец.</li>   <li>Добавьте все ингредиенты в пищевой комбайн.</li>   <li>  <br>    Измельчите все ингредиенты до состояния пасты.  <br>  <ul><br><br><br><br><br>      <li>Если вы хотите "грубый" хумус, измельчайте пару минут.</li>      <li>Если вам нужен гладкий хумус, измельчайте дольше.</li> <br>   </ul>  </li><br><br><br></ol>'
const defFiles = [
  {
    file: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAABCAIAAAB7QOjdAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAPSURBVBhXY/j///+KFSsAEugE9kNtMh0AAAAASUVORK5CYII=',
    file_name: 'file.jpg',
  },
]
const defImg = {
  photo: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA7Q1JFQVRPUjog',
}

//Стандартные значения для структур

const defContacts = [
  {
    contact_type: 'contact_type_default',
    value: 'value_default',
    is_prefered: false,
  },
]
const defAdditionalFields = [
  {
    type: 'string',
    name: 'name_default',
    value: 'value_default',
  },
  {
    type: 'text',
    name: 'name_default',
    value: defTextWithTags,
  },
  {
    type: 'number',
    name: 'name_default',
    value: 1,
  },
]
const defVisibleFieldsVacancy = {
  name: true,
  money: true,
  salary_from: true,
  salary_to: true,
  currency: true,
  needed: true,
  hired: true,
  avg_close_time: true,
  body: true,
  requirements: true,
  conditions: true,
  account_division: true,
  days_will_close: true,
  date_will_close: true,
  days_on_status: true,
  days_failed: true,
  salary_min: true,
  salary_max: true,
  regions: true,
  status_group: true,
  information: true,
  statuses: true,
  owners: true,
  watchers: true,
  fast_vacancy: true,
  profession: true,
  grade: true,
  sphere: true,
  stack: true,
  skills: true,
  city: true,
  country: true,
  vacancy_sites: true,
  author: true,
  count_applicants: true,
}
const defSettingFeildsApplicant = {
  is_first_name: true,
  is_last_name: true,
  is_middle_name: true,
  is_photo: true,
  is_gender: true,
  is_birthday: true,
  is_age: true,
  is_country: true,
  is_citizenship: true,
  is_company: true,
  is_position: true,
  is_phone: true,
  is_email: true,
  is_tg: true,
  is_skype: true,
  is_money: true,
  is_total_experience: true,
  is_source_add: true,
  is_source_name: true,
  is_about_me: true,
  is_skills: true,
  is_vacancies: true,
  is_worklog: true,
  is_experience: true,
  is_education: true,
  is_contacts: true,
  is_tags: true,
  is_unidentified_info: true,
  is_resume_urls: true,
}
const defDownloadPdf = {
  is_first_name: true,
  is_last_name: true,
  is_middle_name: true,
  is_photo: true,
  is_gender: true,
  is_birthday: true,
  is_age: true,
  is_country: true,
  is_citizenship: true,
  is_company: true,
  is_position: true,
  is_phone: true,
  is_email: true,
  is_tg: true,
  is_skype: true,
  is_money: true,
  is_total_experience: true,
  is_source_add: true,
  is_source_name: true,
  is_about_me: true,
  is_skills: true,
  is_vacancies: true,
  is_worklog: true,
  is_experience: true,
  is_education: true,
  is_contacts: true,
  is_tags: true,
  is_unidentified_info: true,
  is_resume_urls: true,
}
const defPermissionsActions = {
  can_manage_vacancy: true,
  can_manage_publication: true,
  can_manage_applicant: true,
  can_manage_tag: true,
  can_upload_data: true,
  can_manage_others_applicant: true,
  can_manage_status: true,
  can_manage_reason: true,
  can_manage_account_source: true,
  can_manage_template_mail: true,
  can_view_work_calendars: true,
}
const defAdminUserSetting = {
  is_hide_history_applicant: false,
  is_hide_experience: false,
  is_hide_education: false,
  is_hide_chat: false,
  is_confirm_send_opd: false,
  pick_sort_vacancies: 'owners',
  pick_sort_applications: 'table',
  permissions_actions: defPermissionsActions,
  visible_fields_vacancy: defVisibleFieldsVacancy,
  download_pdf: defDownloadPdf,
}
const defExperience = [
  {
    position: 'position_default',
    company: 'company_default',
    link: 'link_default',
    date_start: '2020-02-14',
    date_end: '2022-02-14',
    is_now: false,
    description: 'description_default',
    country: 2287,
    skills: ['SQL'],
  },
]
const defEducation = [
  {
    level: 'level_default',
    country: 2287,
    education_type: 'main',
    form: 'form_default',
    name: 'name_default',
    date_start: '2020-02-14',
    date_end: '2020-02-14',
    speciality: 'speciality_default',
    description: 'description_default',
    link: 'link_default',
  },
]
const defComment = {
  description: 'description_default',
}
const defLanguages = [
  {
    language_id: 5,
    language_level_id: 2,
  },
  {
    language_id: 8,
    language_level_id: 3,
  },
]
const defDriverLicenses = [
  {
    driver_license_id: 5,
    driver_experience: 80,
  },
  {
    driver_license_id: 4,
    driver_experience: 30,
  },
]
const defFilters = {
  applicant_name: 'applicant_name_default',
}

//Стандартные значения для сущностей

const defDivision = {
  name: 'name_default',
  description: 'description_default',
  color: '#49B57D',
  additional_fields_list: defAdditionalFields,
}

const defAccount = {
  email: `admin_${Date.now()}@test.test`,
  password: 'adminadmin',
  password_confirmation: 'adminadmin',
  name: 'name_default',
  nick: 'nick_default',
  member_type: 'owner',
  company: 'company_default',
  inn: '0123456789',
  utm_source: 'test',
  is_adv_agree: true,
  time_zone: 'Asia/Yekaterinburg',
  admin_user_setting: defAdminUserSetting,
}

const defWatcher = {
  email: `watcher_${Date.now()}@test.test`,
  password: 'adminadmin',
  password_confirmed: 'adminadmin',
  name: 'name_default',
  nick: 'nick_default',
  is_active: true,
  is_admin: false,
  is_auto: false,
  time_zone: 'Moscow',
  member_type: 'watcher',
  setting_fields_applicant: defSettingFeildsApplicant,
}

const defRecruiter = {
  email: `watcher_${Date.now()}@test.test`,
  password: 'adminadmin',
  password_confirmed: 'adminadmin',
  name: 'name_default',
  nick: 'nick_default',
  is_active: true,
  is_admin: false,
  is_auto: false,
  time_zone: 'Moscow',
  member_type: 'watcher',
  setting_fields_applicant: defSettingFeildsApplicant,
  admin_user_setting: defAdminUserSetting,
}

const defMailTemplate = {
  name: 'name_default',
  title: 'tittle_default',
  action_type: 'mail',
  description: defTextWithKeys,
  is_shared: false,
}

const defStatus = {
  name: 'name_default',
  // status_type: 'user',
  is_favorite: false,
  is_offer: false,
  is_reject: false,
  is_required: false,
  order: 9999,
  stay_duration: 30,
  color: '#49B57D',
  // actions: [
  //   {
  //     name: 'sites',
  //     action_params: {
  //       site: 2,
  //     },
  //   },
  // ],
  // admin_user_statuses: [
  //   {
  //     admin_user_id: 3,
  //     is_read: true,
  //     is_write: false,
  //   },
  // ],
  // evaluation_id: 1,
}

const defStatusGroup = {
  name: 'name_default',
  order: 9999,
  is_active: true,
  is_favorite: false,
  status_ids: [],
}

const defReason = {
  name: 'name_default',
  reason_type: 'hold',
}

const defVacancyApplication = {
  position: 'position_default',
  salary: '1000',
  description: 'description_default (устарело, раньше шло в Общую информацию)',
  comment: 'comment_default (устарело, раньше шло в Общую информацию)',
  needed: 5,
  salary_from: 50000,
  salary_to: 100000,
  currency: 'RUB',
  //   date_will_close: '25.11.2024',
  body: 'body_default',
  requirements: 'requirements_default',
  conditions: 'conditions_default',
  information: 'information_default',
  priority: 1,
  additional_fields_list: defAdditionalFields,
  files: defFiles,
  days_until_deadline: 10,
}

const defVacancy = {
  position: 'position_default',
  salary_from: 50000,
  salary_to: 300000,
  currency: 'RUB',
  needed: 5,
  priority: 0,
  is_hidden: false,
  body: 'body_default',
  requirements: 'requirements_default',
  conditions: 'conditions_default',
  information: 'information',
  //   regions: [
  //     {
  //       site: 'HH',
  //       name: 'Москва',
  //     },
  //     {
  //       site: 'habr',
  //       name: 'Пятигорск',
  //     },
  //   ],
  //   owners: [2, 3],
  //   watchers: [4, 5],
  //   status_group: 1,
  //   statuses: [1, 2],
  country: 2287,
  date_will_close: '31.12.2200',
  //   vacancy_application_id: 47,
  additional_fields_list: defAdditionalFields,
  //   days_until_deadline: 10,
}

const defApplicant = {
  first_name: 'first_name_default',
  last_name: 'last_name_default',
  middle_name: 'middle_name_default',
  photo: defImg,
  lead_type: 'cold',
  birthday: '1988-12-22',
  phone: '+7 (911) 1112233',
  email: 'test@test.test',
  tg: 'tg_default',
  skype: 'skype_default',
  contacts: defContacts,
  money: '100 000',
  currency: 'RUR',
  about_me: 'about_me_default',
  country: 2287,
  gender: 'male',
  citizenship: ['Россия'],
  total_experience: 60,
  experience: defExperience,
  //   employments: [1, 2, 3],
  education: defEducation,
  skills: ['SQL', 'React'],
  text_block: 'text_block_default',
  position: 'position_default',
  company: 'company_default',
  //   vacancy_id: 2,
  //   status_id: 2,
  comment: defComment,
  //   admin_user_id: 41,
  account_source_id:
    'id источника добавления. Можно получить из запроса: /api/account_sources',
  unidentified_info: 'unidentified_info_default',
  languages: defLanguages,
  has_vehicle: false,
  driver_licenses: defDriverLicenses,
}

const defColumn = {
  name: 'name_default',
  size: 'S',
  filters: defFilters,
}

const defEvent = {
  data_mitting: '12.10.2024',
  time_begin: '16:26',
  time_end: '16:30',
  service: 'meet',
  link: 'link_default',
  title: 'title_default',
  description: 'description_default',
  //   applicant_id: 104069,
  //   vacancy_id: 5989,
  //   admin_user_ids: [4, 684, 685],
}

const defSource = {
  name: 'name_default',
  abbr: 'abbr_default',
  description: 'description_default',
  is_active: true,
  logo: defImg,
}

// const defApplicantEvaluation = {
//   criterions: [
//     {
//       criterion_id: 1,
//       comment: 'comment_default',
//       result: {
//         criterion_type: 'pick_few',
//         result: ['Подходит', 'Требует обучения'],
//       },
//     },
//     {
//       criterion_id: 2,
//       comment: 'Добавлено резюме кандидата',
//       result: {
//         criterion_type: 'add_file',
//         file: defImg
//         file_name: 'resume.jpg',
//       },
//     },
//   ],
// }

//Сборнкики переменных

const defVars = {
  textWithTags: defTextWithTags,
  textWithKeys: defTextWithKeys,
  files: defFiles,
  img: defImg,
}

const defStructures = {
  adminSettings: defAdminUserSetting,
  applicantSettings: defSettingFeildsApplicant,
  additionalFields: defAdditionalFields,
  contacts: defContacts,
  experience: defExperience,
  education: defEducation,
  comment: defComment,
  languages: defLanguages,
  driverLicenses: defDriverLicenses,
  filters: defFilters,
}

const defUser = {
  account: defAccount,
  recruiter: defRecruiter,
  watcher: defWatcher,
}

export {
  defStructures,
  defVars,
  defUser,
  defDivision,
  defMailTemplate,
  defStatus,
  defStatusGroup,
  defReason,
  defVacancyApplication,
  defVacancy,
  defApplicant,
  defColumn,
  defEvent,
  defSource,
}
