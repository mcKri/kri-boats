import * as React from 'react';

function App() {
	return React.createElement('div', { className: 'App' },
		React.createElement('h1', null, 'Test App'),
		React.createElement('p', null, 'If you can see this, React is working!')
	);
}

export default App;
