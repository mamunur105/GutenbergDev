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
const save = ({ attributes }) => {
	const { content, title, bgColor } = attributes;
	const redBackground = {
		backgroundColor: bgColor,
		color: '#fff',
		padding: '20px',
	};

	const blockProps = useBlockProps.save( { style: redBackground } );
	return (
		<div { ...blockProps } className="utbfg feature-box fbox-effect">
			<div className="fbox-icon">
				<a href="#"><i className="icon-emo-happy"></i></a>
			</div>
			<div className="fbox-content">
				<RichText.Content
                    tagName="h3"
                    value={ title }
                />
				<RichText.Content
                    tagName="p"
                    value={ content }
                />
			</div>
		</div>
	);
}

export default save;