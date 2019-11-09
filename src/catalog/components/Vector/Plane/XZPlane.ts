import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class XZPlane extends ResthopperComponent {

	public guid: string = "8cc3a196-f6a0-49ea-9ed9-0cb343a3ae64";
	public name: string = "XZ Plane";
	public category: string = "Vector";
	public subCategory: string = "Plane";
	public description: string = "World XZ plane.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}