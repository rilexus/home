import React from 'react';
import {CSSTransition} from "react-transition-group";
import './unfold-component.style.scss';
import ReactStatelessComponent from "./svgs/react-logo.component";
import ScssStatelessComponent from "./svgs/scss-logo.component";
import JsStatelessComponent from "./svgs/js-logo.component";
import HtmlStatelessComponent from "./svgs/html-logo.component";
import CssStatelessComponent from "./svgs/css-logo.component";
import AngularStatelessComponent from "./svgs/angular-logo.component";
import GraphqlStatelessComponent from "./svgs/graphql-logo.component";
import NestStatelessComponent from "./svgs/nestjs-logo.component";
import SketchStatelessComponent from "./svgs/sketch-logo.component";
import PhotoshopStatelessComponent from "./svgs/photoshop-logo.component";
import IntellijStatelessComponent from "./svgs/intellij-logo.component";



const svgs = [
	{
		Component: ReactStatelessComponent,
		name: 'React',
		url: 'https://reactjs.org/'
	},
	{
		Component: ScssStatelessComponent,
		name: 'SCSS',
		url: 'https://sass-lang.com/'
		
	},
	{
		Component: JsStatelessComponent,
		name: 'JavaScript',
		url: 'https://javascript.com/'
		
	},
	{
		Component: HtmlStatelessComponent,
		name: 'HTML',
		url: 'https://w3.org/standards/webdesign/htmlcss'
		
	},
	{
		Component: CssStatelessComponent,
		name: 'CSS',
		url: 'https://w3.org/standards/webdesign/htmlcss'
		
	},
	{
		Component: AngularStatelessComponent,
		name: 'Angular',
		url: 'https://angular.io/'
		
	},
	{
		Component: GraphqlStatelessComponent,
		name: 'GraphQL',
		url: 'https://graphql.org/'
	},
	{
		Component: NestStatelessComponent,
		name: 'NestJS',
		url: 'https://nestjs.com/'
	},
	{
		Component: SketchStatelessComponent,
		name: 'Sketch',
		url: 'https://sketchapp.com/'
	},
	{
		Component: PhotoshopStatelessComponent,
		name: 'Photoshop',
		url: 'https://adobe.com/products/photoshop.html',
	},
	{
		Component: IntellijStatelessComponent,
		name: 'Intellij',
		url: 'https://jetbrains.com/idea/',
	},
	
];


const UnfoldComponent = ({delay, onClick, onMouseEnter, onMouseLeave}) => {
	return (
		<CSSTransition
			classNames={'scroll-animation'}
			timeout={500}
			in
			appear
			unmountOnExit
		>
			<div className="scroll">
				<ul>
					{
						svgs.map(({name, Component, url}, idx) => {
							return (
								<li
									style={{transitionDelay: `${delay * idx}ms`}}
									key={`tech_name: ${name}`}
									onMouseEnter={ e => onMouseEnter({
										top: e.target.getBoundingClientRect().top - 60,
										left: e.target.getBoundingClientRect().left + 25,
										name: name,
										url: url,
									})}
									onMouseLeave={e => onMouseLeave(e)}
									onClick={(e) => onClick(e, name)}
								>
									<a href={url} target='_black'>
										<Component/>
									</a>
								</li>
							)
						})
					}
				</ul>
			</div>
		</CSSTransition>
	);
};

export default UnfoldComponent;