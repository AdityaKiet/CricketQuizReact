import React from 'react';
import QuestionItem from '../containers/QuestionItem';

const QuestionsList = ({questions}) => {

  const questionItems = questions.map((question) => {
    return (
      <QuestionItem key={question.id} question = {question}/>
    );
  });

   return(
     <ul>
       {questionItems}
    </ul>
   );
 };

export default QuestionsList;
