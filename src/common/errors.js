const ERROR_MSG = {}

export function error(msg) {
  return ERROR_MSG[msg] ? ERROR_MSG[msg] : 'Неизвестная ошибка.'
}
