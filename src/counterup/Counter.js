import counterUp from 'counterup2'
const cUp = () => (
	document.addEventListener("DOMContentLoaded", (event) => { 
		const el = document.querySelector( '.countvalue' )
		// Start counting, do this on DOM ready or with Waypoints.
		counterUp( el, {
			duration: 1000,
			delay: 16,
		} )
	})
)

export default cUp;
