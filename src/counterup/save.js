/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 *
 * @return {WPElement} Element to render.
 */
const save = ( {attributes } ) => {
	const {
		counterContent,
		counterValue
	} = attributes;
	const counterUpScript = ( event ) => {
		// Start counting, do this on DOM ready or with Waypoints.
		// counterUp( el, {
		// 	duration: 1000,
		// 	delay: 16,
		// } )
		console.log( 'Log Value' );
		console.log( event.target );
	}
	return (
		<div { ...useBlockProps.save() }>
			<div className="counter" >
				<span className="countvalue" onClick={ counterUpScript } >{ counterValue }</span>
				<RichText.Content
					key='counterContent'
					tagName="p"
					value={ counterContent }
				/>
			</div>
		</div>
	);
}

export default save;