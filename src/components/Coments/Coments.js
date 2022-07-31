import React, { useState } from 'react';
import BlueButton from '../Buttons/BlueButton/BlueButton';
import './coments.css';

const Coments = () => {
	const [questionsAnswers, setQuestionsAnswers] = useState([
		{
			question: 'Hola! Hacen envíos al interior?',
			answer:
				'¡Hola! Así es. ¡Esperamos tu compra! Ante cualquier otra consulta estamos a disposición, saludos y muchas gracias.',
		},
		{
			question: 'Tenés stock para realizar la compra?',
			answer:
				'¡Hola! Si, tenemos stock. ¡Esperamos tu compra! Ante cualquier otra consulta estamos a disposición, saludos y muchas gracias.',
		},
		{
			question: 'Buen día! Tienen en otro color?',
			answer:
				'¡Hola! Los colores disponibles por el momento son los que figuran en la descripción. ¡Esperamos tu compra! Ante cualquier otra consulta estamos a disposición, saludos y muchas gracias.',
		},
	]);

	const addQuestion = e => {
		e.preventDefault();
		let question = e.target.questionInput.value;
		!question
			? alert('El campo no puede estar vacío')
			: setQuestionsAnswers([
					{ question, answer: 'El vendedor suele responder en 24hs.' },
					...questionsAnswers,
			  ]);
		return;
	};

	return (
		<>
			<section className="QaA-container">
				<h2 className="QaA-title">Preguntas y respuestas</h2>
				<h3 className="QaA-subTitle">Pregunta lo que querés saber</h3>
				<form className="QaA-form" onSubmit={addQuestion}>
					<textarea
						className="QaA-input"
						id="questionInput"
						type="text"
						row="1"
						maxlength="120"
						placeholder="Escribí una pregunta o palabra clave..."
					/>
					<BlueButton text={'Enviar pregunta'} />
				</form>

				<h3 className="QaA-subTitle">Últimas realizadas</h3>
				<div className="QaA-list">
					{questionsAnswers.map(QaA => (
						<>
							<p className="QaA-question">{QaA.question}</p>
							<div className="QaA-answer-container">
								<span>L</span>
								<p>{QaA.answer}</p>
							</div>
						</>
					))}
				</div>
			</section>
		</>
	);
};

export default Coments;
