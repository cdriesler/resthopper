import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class BlendColours extends ResthopperComponent {

	public guid: string = "8b4da37d-1124-436a-9de2-952e4224a220";
	public name: string = "Blend Colours";
	public category: string = "Vector";
	public subCategory: string = "Colour";
	public description: string = "Interpolate (blend) between two colours.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}