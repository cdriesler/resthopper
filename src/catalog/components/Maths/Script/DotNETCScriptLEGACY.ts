import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class DotNETCScriptLEGACY extends ResthopperComponent {

	public guid: string = "88c3f2b5-27f7-48a2-9528-1397fad62b93";
	public name: string = "DotNET C# Script (LEGACY)";
	public category: string = "Maths";
	public subCategory: string = "Script";
	public description: string = "A C#.NET scriptable component";
	public isObsolete: boolean = false;

	public library: string = "Script Components";

}