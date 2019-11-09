import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class SphereFourPt extends ResthopperComponent {

	public guid: string = "b083c06d-9a71-4f40-b354-1d80bba1e858";
	public name: string = "Sphere 4Pt";
	public category: string = "Surface";
	public subCategory: string = "Primitive";
	public description: string = "Create a spherical surface from 4 points.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}