export interface ProjectType {
	id: number;
	title: string;
	images: string[];
	desc: string;
	tags: string[];
	live: string;
	github: string;
	fullView?: string;
}

export interface ExperienceType {
	id: number;
	year: string;
	title: string;
	name: string;
	desc: string;
	languages: string[];
}

export interface ColorType { background: string; color: string; border: string }

export interface LanguageBoxType {
	skillId: number;
	name: string;
	colors: ColorType;
	column: number;
	row: number;
}

export interface SkillBoxType {
	id: number;
	year: string;
	title: string;
	name: string;
	desc: string;
	languages: LanguageBoxType[];
}
