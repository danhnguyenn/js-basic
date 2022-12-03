// Interation protocols

function createInterator(n) {
    
	let i = 0;

	return {
		next() {
			const result = {
				value: i,
				done: i >= n
			};

			i += 1;
			return result;
		}
	};
}

const interator = createInterator(10);

let result = interator.next();

while (!result.done) {
	console.log(result.value);
	result = interator.next();
}
