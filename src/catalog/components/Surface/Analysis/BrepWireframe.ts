import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BrepWireframe extends ResthopperComponent {

	public guid: string = "ac750e41-2450-4f98-9658-98fef97b01b2";
	public name: string = "Brep Wireframe";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Extract the wireframe curves of a brep.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}