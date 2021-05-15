const { registerBlockType } = wp.blocks;
const {
	RichText,
	InspectorControls,
	ColorPalette,
	MediaUpload,
	InnerBlocks,
	BlockControls,
	AlignmentToolbar,
	MediaUploadCheck
} =  wp.blockEditor;
const ALLOW_BLOCKS = ['core/button'];
const { PanelBody, Button, RangeControl } = wp.components;
registerBlockType('alocade/custom-cta',{
	title:  'Call to Action' ,
	description:'Block showing a Book card.' ,
	icon: 'arrow-right-alt',
	category: 'layout',
	// Specifying my block attributes
	attributes: {
		title:{
			type: 'string',
			source: 'html',
			selector: 'h2.cta-title'
		},
		titleColor : {
			type: 'string',
			default: 'black'
		},

		body: {
			type: 'string',
			source: 'html',
			selector:'p.cta-description'
		},
		alignment: {
			type: 'string',
			default: 'none'
		},
		backgroundImage: {
			type: 'string',
			default: null
		},
		overlayColor:{
			type: 'string',
			default: 'black'
		},
		overlayOpacity:{
			type: 'number',
			default: 0.3
		}
	},
	
	edit : ({ attributes, setAttributes }) => {
		const {
			title,
			body,
			titleColor,
			overlayColor,
			overlayOpacity,
			alignment,
			backgroundImage
		} = attributes

		const instructions = <p>{  'To edit the background image, you need permission to upload media.'}</p>;

		const onChangeTitle = title  => {
			setAttributes({ title });
		}
		const onChangeBody = body => {
			setAttributes({ body });
		}
		const onTitleColorChange = titleColor  => {
			setAttributes({ titleColor });
		}
		const onSelectImage = ( { url } ) => {
			// console.log( newImage );
			setAttributes({ backgroundImage: url });
		}
		const overlayColorChange = overlayColor => {
			// console.log( newImage );
			setAttributes({ overlayColor });
		}
		const overlayOpacityChange = overlayOpacity => {
			// console.log( newImage );
			setAttributes({ overlayOpacity });
		}
		const onChangeAlignment = ( newAlignment ) => {
            setAttributes( {
                alignment: newAlignment === undefined ? 'none' : newAlignment,
            } );
        };

		return([
				<InspectorControls style={{ marginBottom: '40px' }}>
					<PanelBody title={'Font Color Settings'}>
						<p><strong> Select a Title color</strong></p>
						<ColorPalette  
							value={titleColor}
							onChange={ onTitleColorChange }
						/>
					</PanelBody>
					<PanelBody title={'Background Image Settings'}>
						 <div className="wp-block-image-selector-example-image">
                            <MediaUploadCheck fallback={ instructions }>
                                <MediaUpload
                                    title={ 'Background image' }
                                    onSelect={ onSelectImage }
									type='image'
                                    value={ backgroundImage }
                                    render={ ( { open } ) => (
                                        <Button
                                            className={ 'editor-post-featured-image__toggle' }
                                            onClick={ open }>
                                            { 'Set background image' }
                                        </Button>
                                    ) }
                                />
                            </MediaUploadCheck>
                        </div>
					</PanelBody>
					<PanelBody title={'Background overlay Settings'}>
						<p><strong> Select Background overlay color</strong></p>
						<ColorPalette  
							value={overlayColor}
							onChange={ overlayColorChange }
						/>
						<RangeControl
							label="Opacity"
							value={ overlayOpacity }
							onChange={ overlayOpacityChange }
							min={ 0.1 }
							max={ 1 }
							step={ 0.1 }
						/>
						
					</PanelBody>

				</InspectorControls>,
				<div className='cta-container' style={{backgroundImage: `url(${backgroundImage})` }}>
					<div className="overly-color " style={{ 
						backgroundColor: overlayColor,
						opacity: overlayOpacity
					}}></div>
					{
							<BlockControls> 
								<AlignmentToolbar 
									value={ alignment }  
									onChange={ onChangeAlignment }
								/>
							</BlockControls>
					}
					<RichText 
						key='titleeditable'
						className='cta-title'
						tagName="h2"
						placeholder = "Your Cta title"
						value={title}
						onChange={ onChangeTitle }
						style={ { color: titleColor,textAlign: alignment  } }
					/>
					<RichText 
						key='descriptioneditable'
						className='cta-description'
						tagName="p"
						placeholder = "CTA Description"
						value={body}
						onChange={ onChangeBody }
						style={ { textAlign: alignment  } }
					/>
					<InnerBlocks allowedBlocks={ ALLOW_BLOCKS } />
				</div>
		])
	},
	save: ({attributes}) => {
		const {
			title,
			body,
			backgroundImage,
			overlayColor,
			overlayOpacity,
			alignment,
			titleColor
		} = attributes
		
		return(
			<div className='cta-container' style={{backgroundImage: `url(${backgroundImage})` }} >
				<div className="overly-color" style={{ 
						backgroundColor: overlayColor,
						opacity: overlayOpacity
					}}></div>
				<RichText.Content
					className='cta-title'
					tagName="h2"
					value={title}
					style={ { color: titleColor, textAlign: alignment  } }
				/>
				<RichText.Content
					className='cta-description'
					tagName="p"
					value={body}
					style={ { textAlign: alignment  } }
				/>
				<InnerBlocks.Content/>

			</div>
		)
	}
});