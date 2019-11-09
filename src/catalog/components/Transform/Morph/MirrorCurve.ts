import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class MirrorCurve extends ResthopperComponent {

	public guid: string = "9c9f8219-ae88-4d29-ba1b-3433ed713639";
	public name: string = "Mirror Curve";
	public category: string = "Transform";
	public subCategory: string = "Morph";
	public description: string = "Mirror a shape in a freeform curve.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}