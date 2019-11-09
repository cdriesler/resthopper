import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class OffsetSurface extends ResthopperComponent {

	public guid: string = "b25c5762-f90e-4839-9fc5-74b74ab42b1e";
	public name: string = "Offset Surface";
	public category: string = "Surface";
	public subCategory: string = "Util";
	public description: string = "Offset a surface by a fixed amount.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}