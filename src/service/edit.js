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
		title,
		bgColor
	} = attributes;
	const greenBackground = {
		backgroundColor: bgColor,
		color: '#fff',
		padding: '20px',
	};

	const blockProps = useBlockProps( { style: greenBackground } );

	const onChangeContent = content => {
		setAttributes({ content });
	}

	const onChangeTitle = title => {
		setAttributes({ title });
	}


	return (
		<div { ...blockProps } className="utbfg feature-box fbox-effect">
			{ blockControls( attributes , setAttributes ) }
			<div className="fbox-icon">
				<a href="#"><i className="icon-emo-happy"></i></a>
			</div>
			<div className="fbox-content">
				<RichText
					tagName="h3"
					placeholder = "Block Title"
					value={title}
					onChange={ onChangeTitle }
				/>
				<RichText
                    tagName="p"
					placeholder = "Block Description"
                    onChange={ onChangeContent }
                    value={ content }
                />
			</div>
		</div>
	);
}
export default Edit;