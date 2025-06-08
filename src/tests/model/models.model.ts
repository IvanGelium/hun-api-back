import { FetcherUtil } from '../utils/utils'
import {
  defDivision,
  defUser,
  defMailTemplate,
  defStatus,
  defStatusGroup,
  defReason,
  defVacancy,
  defVacancyApplication,
  defColumn,
  defEvent,
  defSource,
} from '../utils/defaultValues'

// Базовый класс
class BaseApiModel {
  protected readonly fetcher: FetcherUtil

  constructor(token: string, stage: boolean = false) {
    this.fetcher = new FetcherUtil({ token, stage })
  }
}

//Подразделение

class DivisionModel extends BaseApiModel {
  async create(divisionData = defDivision) {
    return await this.fetcher.post(
      { route: '/account_divisions' },
      divisionData
    )
  }
}

//Аккаунт

class AccountModel extends BaseApiModel {
  async create(accauntData = defUser.account) {
    return await this.fetcher.post({ route: '/sign_up' }, accauntData)
  }
}

//Шаблон письма

class MailTemplateModel extends BaseApiModel {
  async create(mailTempData = defMailTemplate) {
    return await this.fetcher.post(
      { route: '/account_mail_temps' },
      mailTempData
    )
  }
}

//Этап

class StatusModel extends BaseApiModel {
  async create(statusData = defStatus) {
    return await this.fetcher.post({ route: '/statuses' }, statusData)
  }
}

//Воронка

class StatusGroupModel extends BaseApiModel {
  async create(statusGroupData) {
    return await this.fetcher.post({ route: '/status_groups' }, statusGroupData)
  }
}

//Причина отказа

class ReasonModel extends BaseApiModel {
  async create(reasonData = defReason) {
    return await this.fetcher.post({ route: '/reasons' }, reasonData)
  }
}

//Пользователь

class UserModel extends BaseApiModel {
  async create(userData = defUser.watcher) {
    return await this.fetcher.post({ route: '/create_admin_user' }, userData)
  }
}

//Заявка

class VacancyApplicationModel extends BaseApiModel {
  async create(vacancyApplicationData = defVacancyApplication) {
    return await this.fetcher.post(
      { route: '/vacancy_applications' },
      vacancyApplicationData
    )
  }
}

//Вакансия

class VacancyModel extends BaseApiModel {
  async create(vacancyData = defVacancy) {
    return await this.fetcher.post({ route: '/vacancies' }, vacancyData)
  }
}

//Колонка кандидатов

class ColumnModel extends BaseApiModel {
  async create(columnData = defColumn) {
    return await this.fetcher.post({ route: '/columns' }, columnData)
  }
}

//Событие | Встреча

class EventModel extends BaseApiModel {
  async create(eventData = defEvent) {
    return await this.fetcher.post({ route: '/events' }, eventData)
  }
}

//Источник кандидатов

class SourceModel extends BaseApiModel {
  async create(sourceData = defSource) {
    return await this.fetcher.post({ route: '/account_sources' }, sourceData)
  }
}

//Форма оценки

// class ApplicantEvaluations extends BaseApiModel {
//   async create(ApplicantEvaluationsData = 'WIP') {
//     return await this.fetcher.post(
//       { route: '/applicant_evaluations' },
//       ApplicantEvaluationsData
//     )
//   }
// }

export {
  DivisionModel,
  AccountModel,
  MailTemplateModel,
  StatusModel,
  StatusGroupModel,
  ReasonModel,
  UserModel,
  VacancyApplicationModel,
  VacancyModel,
  ColumnModel,
  EventModel,
  SourceModel,
}
