import React, { useEffect, useState } from 'react';

const TestList = () => {
    const [tests, setTests] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTests = async () => {
            try {
                const response = await fetch('/api/tests');
                const data = await response.json();
                setTests(data);
            } catch (error) {
                console.error('Error fetching tests:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTests();
    }, []);

    if (loading) return <div className="text-center">Loading...</div>;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Test Questions</h1>
            <ul className="space-y-4">
                {tests.map(test => (
                    <li key={test.id} className="border p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">{test.question}</h2>
                        <ul className="list-disc pl-5 mt-2">
                            {test.options.map((option, index) => (
                                <li key={index}>{option}</li>
                            ))}
                        </ul>
                        <p className="mt-2 font-bold">Correct Answer: {test.correctAnswer}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TestList;
