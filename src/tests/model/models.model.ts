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
  defApplicantEvaluation,
  defApplicant,
  defTag,
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

  async getAll() {
    return await this.fetcher.get({ route: '/account_divisions' })
  }

  async getById(id) {
    return await this.fetcher.get({ route: '/account_divisions', params: id })
  }

  async update(id, divisionData = defDivision) {
    return await this.fetcher.patch(
      { route: '/account_divisions', params: id },
      divisionData
    )
  }

  async delete(id) {
    return await this.fetcher.get({ route: '/account_divisions', params: id })
  }
}

//Аккаунт

class AccountModel extends BaseApiModel {
  async create(accauntData = defUser.account) {
    return await this.fetcher.post({ route: '/sign_up' }, accauntData)
  }

  async getCurrent() {
    return await this.fetcher.get({ route: '/account' })
  }

  async update(accauntData = defUser.account) {
    return await this.fetcher.patch({ route: '/sign_up' }, accauntData)
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

  async getAll() {
    return await this.fetcher.get({ route: '/account_mail_temps' })
  }

  async getById(id) {
    return await this.fetcher.get({ route: '/account_mail_temps', params: id })
  }

  async update(id, mailTempData = defMailTemplate) {
    return await this.fetcher.patch(
      { route: '/account_mail_temps', params: id },
      mailTempData
    )
  }

  async delete(id) {
    return await this.fetcher.delete({
      route: '/account_mail_temps',
      params: id,
    })
  }
}

//Этап

class StatusModel extends BaseApiModel {
  async create(statusData = defStatus) {
    return await this.fetcher.post({ route: '/statuses' }, statusData)
  }

  async getAll(id?) {
    return await this.fetcher.get({ route: '/statuses', params: id })
  }

  async update(id, statusData = defStatus) {
    return await this.fetcher.patch(
      { route: '/statuses', params: id },
      statusData
    )
  }

  async delete(id) {
    return await this.fetcher.get({ route: '/statuses', params: id })
  }
}

//Воронка

class StatusGroupModel extends BaseApiModel {
  async create(statusGroupData) {
    return await this.fetcher.post({ route: '/status_groups' }, statusGroupData)
  }

  async getAll() {
    return await this.fetcher.get({ route: '/status_groups' })
  }

  async update(id, statusGroupData = defStatusGroup) {
    return await this.fetcher.patch(
      { route: '/status_groups', params: id },
      statusGroupData
    )
  }

  async delete(id) {
    return await this.fetcher.delete({ route: '/status_groups', params: id })
  }
}

//Причина отказа

class ReasonModel extends BaseApiModel {
  async create(reasonData = defReason) {
    return await this.fetcher.post({ route: '/reasons' }, reasonData)
  }

  async getAll() {
    return await this.fetcher.get({ route: '/reasons' })
  }

  async getById(id) {
    return await this.fetcher.get({ route: '/reasons', params: id })
  }

  async update(id, reasonData = defReason) {
    return await this.fetcher.put({ route: '/reasons', params: id }, reasonData)
  }

  async delete(id) {
    return await this.fetcher.delete({ route: '/reasons', params: id })
  }
}

//Пользователь

class UserModel extends BaseApiModel {
  async create(userData = defUser.watcher) {
    return await this.fetcher.post({ route: '/create_admin_user' }, userData)
  }

  async getAll() {
    return await this.fetcher.get({ route: '/users' })
  }

  async update(id, userData = defUser.watcher) {
    return await this.fetcher.patch({ route: '/users', params: id }, userData)
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

  async getAll() {
    return await this.fetcher.get({ route: '/vacancy_applications' })
  }

  async getById(id) {
    return await this.fetcher.get({
      route: '/vacancy_applications',
      params: id,
    })
  }

  async update(id, vacancyApplicationData = defVacancyApplication) {
    return await this.fetcher.patch(
      { route: '/vacancy_applications', params: id },
      vacancyApplicationData
    )
  }

  async delete(id) {
    return await this.fetcher.get({
      route: '/vacancy_applications',
      params: id,
    })
  }
}

//Вакансия

class VacancyModel extends BaseApiModel {
  async create(vacancyData = defVacancy) {
    return await this.fetcher.post({ route: '/vacancies' }, vacancyData)
  }

  async getAll() {
    return await this.fetcher.get({ route: '/vacancies' })
  }

  async getById(id) {
    return await this.fetcher.get({ route: '/vacancies', params: id })
  }

  async update(id, vacancyData = defVacancy) {
    return await this.fetcher.put(
      { route: '/vacancies', params: id },
      vacancyData
    )
  }

  async delete(id) {
    return await this.fetcher.delete({ route: '/vacancies', params: id })
  }
}

//Колонка кандидатов

class ColumnModel extends BaseApiModel {
  async create(columnData = defColumn) {
    return await this.fetcher.post({ route: '/columns' }, columnData)
  }

  async getAll() {
    return await this.fetcher.get({ route: '/columns' })
  }

  async getById(id) {
    return await this.fetcher.get({ route: '/columns', params: id })
  }

  async update(id, columnData = defColumn) {
    return await this.fetcher.put({ route: '/columns', params: id }, columnData)
  }

  async delete(id) {
    return await this.fetcher.delete({ route: '/columns', params: id })
  }
}

//Событие | Встреча

class EventModel extends BaseApiModel {
  async create(eventData = defEvent) {
    return await this.fetcher.post({ route: '/events' }, eventData)
  }

  async getAll() {
    return await this.fetcher.get({ route: '/events' })
  }

  async getById(id) {
    return await this.fetcher.get({ route: '/events', params: id })
  }

  async update(id, eventData = defEvent) {
    return await this.fetcher.put({ route: '/events', params: id }, eventData)
  }

  async delete(id) {
    return await this.fetcher.delete({ route: '/events', params: id })
  }
}

//Источник кандидатов

class SourceModel extends BaseApiModel {
  async create(sourceData = defSource) {
    return await this.fetcher.post({ route: '/account_sources' }, sourceData)
  }

  async get() {
    return await this.fetcher.get({ route: '/account_sources' })
  }

  async update(id, sourceData = defSource) {
    return await this.fetcher.patch(
      { route: '/account_sources', params: id },
      sourceData
    )
  }

  async delete(id) {
    return await this.fetcher.delete({ route: '/account_sources', params: id })
  }
}

//Форма оценки

class ApplicantEvaluationModel extends BaseApiModel {
  async create(applicantEvaluationsData = defApplicantEvaluation) {
    return await this.fetcher.post(
      { route: '/applicant_evaluations' },
      applicantEvaluationsData
    )
  }

  async getById(id) {
    return await this.fetcher.get({
      route: '/applicant_evaluations',
      params: id,
    })
  }

  async update(id, applicantEvaluationsData = defApplicantEvaluation) {
    return await this.fetcher.patch(
      { route: '/applicant_evaluations', params: id },
      applicantEvaluationsData
    )
  }

  async delete(id) {
    return await this.fetcher.delete({
      route: '/applicant_evaluations',
      params: id,
    })
  }
}

//Кандидат

class ApplicantModel extends BaseApiModel {
  async create(applicantData = defApplicant) {
    return await this.fetcher.post({ route: '/applicants' }, applicantData)
  }

  async getAll(query) {
    return await this.fetcher.queryGet({ route: '/applicants', query: query })
  }

  async getById(id) {
    return await this.fetcher.get({ route: '/applicants', params: id })
  }

  async update(id, applicantData = defApplicant) {
    return await this.fetcher.patch(
      { route: '/applicants', params: id },
      applicantData
    )
  }

  async delete(id) {
    return await this.fetcher.delete({ route: '/applicants', params: id })
  }
}

//Метка

class TagModel extends BaseApiModel {
  async create(tagData = defTag) {
    return await this.fetcher.post({ route: '/tags' }, tagData)
  }

  async getAll() {
    return await this.fetcher.get({ route: '/tags' })
  }

  async update(id, tagData = defTag) {
    return await this.fetcher.patch({ route: '/tags', params: id }, tagData)
  }

  async delete(id) {
    return await this.fetcher.delete({ route: '/tags', params: id })
  }
}

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
  ApplicantEvaluationModel,
  ApplicantModel,
  TagModel,
}
