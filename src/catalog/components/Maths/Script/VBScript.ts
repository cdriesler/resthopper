import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class VBScript extends ResthopperComponent {

	public guid: string = "079bd9bd-54a0-41d4-98af-db999015f63d";
	public name: string = "VB Script";
	public category: string = "Maths";
	public subCategory: string = "Script";
	public description: string = "A VB.NET scriptable component";
	public isObsolete: boolean = false;

	public library: string = "Script Components";

}