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
    InspectorControls,
	RichText
} from '@wordpress/block-editor';

const { PanelBody, PanelRow, SelectControl } = wp.components;

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
// import  attributes from 'attributes';
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

export default function Edit( {attributes, setAttributes} ) {
	const {
		content,
		type
	} = attributes;
	const onChangeContent = content => {
		setAttributes({ content });
	}
	const onChangeType = type => {
		setAttributes({ type });
	}

	return (
		<div className="gutadns-alert-wrapper" { ...useBlockProps() } >
			<InspectorControls key="setting">
				<PanelBody
					title="Notice Settings"
					initialOpen={ true }
				>
					<PanelRow>
						<SelectControl
							label="Type"
							value={ type }
							options={ [
								{ label: 'Danger', value: 'danger' },
								{ label: 'Success', value: 'success' },
								{ label: 'Info', value: 'info' },
								{ label: 'Warning', value: 'warning' },
							] }
							onChange={ onChangeType }
						/>
					</PanelRow>
				</PanelBody>
			</InspectorControls>
			<div className={ `gutadns-alert ${type}`}>
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
	);
}
