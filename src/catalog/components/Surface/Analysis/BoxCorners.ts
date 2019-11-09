import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class BoxCorners extends ResthopperComponent {

	public guid: string = "a10e8cdf-7c7a-4aac-aa70-ddb7010ab231";
	public name: string = "Box Corners";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Extract all 8 corners of a box.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}