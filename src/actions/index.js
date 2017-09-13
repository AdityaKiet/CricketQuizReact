export const SELECT_OPTION = "SELECT_OPTION";
export const CLEAR_FORM = "CLEAR_FORM";
export const SUBMIT_FORM = "SUBMIT_FORM";

export function selectOption(id, option) {
  return{
    type : SELECT_OPTION,
    payload : {option, id}
  };
}


export function clearForm() {
  return{
    type : CLEAR_FORM,
    payload : null
  };
}

export function submitForm(questions, answers) {

  var isSuccess = true;
  var correct = 0;
  var incorrect = 0;

  questions.map(question => {
    if (answers[question.id] == undefined)
      isSuccess = false;
    else if (answers[question.id] == question.correct_option)
      correct++;
    else
      incorrect++;
  });

  return {
    type : SUBMIT_FORM,
    payload : {isSuccess, correct, incorrect}
  }
}
