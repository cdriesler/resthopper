import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class BlurMesh extends ResthopperComponent {

	public guid: string = "48a9fa10-8d3c-4767-aca6-81232271f6e0";
	public name: string = "Blur Mesh";
	public category: string = "Mesh";
	public subCategory: string = "Util";
	public description: string = "Blur the colours on a mesh";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}