import React, { useState } from 'react';

const api = process.env.REACT_APP_API_URL;

const TestForm = ({ test, onSave }) => {
    const [title, setTitle] = useState(test ? test.title : '');
    const [question, setQuestion] = useState(test ? test.question : '');
    const [options, setOptions] = useState(test ? test.options.join(', ') : '');
    const [correctAnswer, setCorrectAnswer] = useState(test ? test.correctAnswer : '');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const optionArray = options.split(',').map(option => option.trim());

        const requestBody = {
            title,
            question,
            options: optionArray,
            correctAnswer
        };

        try {
            const response = await fetch(`${api}tests`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(requestBody)
                });

            const data = await response.json();
            onSave(data);
        } catch (error) {
            console.error('Error saving test:', error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">{test ? 'Update Test' : 'Create New Test'}</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="mt-1 block w-full border rounded-lg p-2"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Question</label>
                    <input
                        type="text"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        className="mt-1 block w-full border rounded-lg p-2"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Options (comma separated)</label>
                    <input
                        type="text"
                        value={options}
                        onChange={(e) => setOptions(e.target.value)}
                        className="mt-1 block w-full border rounded-lg p-2"
                        required
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium">Correct Answer</label>
                    <input
                        type="text"
                        value={correctAnswer}
                        onChange={(e) => setCorrectAnswer(e.target.value)}
                        className="mt-1 block w-full border rounded-lg p-2"
                    />
                </div>
                <button
                    type="submit"
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                    {test ? 'Update Test' : 'Create Test'}
                </button>
            </form>
        </div>
    );
};

export default TestForm;
