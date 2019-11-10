import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class GhPythonScript extends ResthopperComponent {

	public guid: string = "410755b1-224a-4c1e-a407-bf32fb45ea7e";
	public name: string = "GhPython Script";
	public category: string = "Maths";
	public subCategory: string = "Script";
	public description: string = "GhPython provides a Python script component";
	public isObsolete: boolean = false;

	public library: string = "";

}