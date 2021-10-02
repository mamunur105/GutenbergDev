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
import {
	useBlockProps,
	RichText
} from '@wordpress/block-editor';


import blockControls from './blockControls';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */

/**
 * Import Attribute
 */

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
const Edit = ( { attributes, setAttributes } ) => {
	const {
		content,
		type,
		bgColor
	} = attributes;
	const onChangeContent = content => {
		setAttributes({ content });
	}

	return (
		<div className="gutadns-alert-wrapper" >
			<div className={`gutadns-alert ${type}`}
					style={ { backgroundColor: bgColor} }
				>
				<div { ...useBlockProps() } >
					{ blockControls( attributes , setAttributes ) }
					<RichText
						key='descriptioneditable'
						className='alert-description'
						tagName="p"
						placeholder = "Alert Description"
						value={content}
						onChange={ onChangeContent }
					/>
				</div>
			</div>
		</div >
	);
}
export default Edit;