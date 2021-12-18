import { createAction, props } from '@ngrx/store';
import {Analyte, Metabolite, Ontology, Pathway, SourceVersion} from "@ramp/models/ramp-models";
import { RampEntity } from './ramp.models';

export const init = createAction('[Ramp] Init');
export const initAbout = createAction('[Ramp About Page] Init');

export const loadRampSuccess = createAction(
  '[Ramp/API] Load Ramp Success',
  props<{ rampStore: RampEntity[] }>()
);

export const loadRampFailure = createAction(
  '[Ramp/API] Load Ramp Failure',
  props<{ error: any }>()
);

export const loadRampAboutSuccess = createAction(
  '[Ramp/API] Load Ramp About Success',
  props<{ data: any }>()
);

export const loadRampAboutFailure = createAction(
  '[Ramp/API] Load Ramp About Failure',
  props<{ error: any }>()
);

export const loadSourceVersions = createAction(
  '[Ramp/API] Load SourceVersions'
);

export const loadSourceVersionsSuccess = createAction(
  '[Ramp/API] Load SourceVersions Success',
  props<{ versions: SourceVersion[] }>()
);

export const loadSourceVersionsFailure = createAction(
  '[Ramp/API] Load SourceVersions Failure',
  props<{ error: any }>()
);

export const loadEntityCounts = createAction('[Ramp/API] Load EntityCounts');

export const loadEntityCountsSuccess = createAction(
  '[Ramp/API] Load EntityCounts Success',
  props<{ rampStore: RampEntity[] }>()
);

export const loadEntityCountsFailure = createAction(
  '[Ramp/API] Load EntityCounts Failure',
  props<{ error: any }>()
);

export const loadAnalyteIntersects = createAction(
  '[Ramp/API] Load AnalyteIntersects'
);

export const loadAnalyteIntersectsSuccess = createAction(
  '[Ramp/API] Load AnalyteIntersects Success',
  props<{ rampStore: RampEntity[] }>()
);

export const loadAnalyteIntersectsFailure = createAction(
  '[Ramp/API] Load AnalyteIntersects Failure',
  props<{ error: any }>()
);


export const fetchMetabolitesFromOntologies = createAction(
  '[Ramp/API] fetchMetabolitesFromOntologies',
  props<{ontologies: string[]}>()
);

export const fetchMetabolitesFromOntologiesSuccess = createAction(
  '[Ramp/API] fetchMetabolitesFromOntologies Success',
  props<{ metabolites: Metabolite[] }>()
);

export const fetchMetaboliteFromOntologiesFailure = createAction(
  '[Ramp/API] Fetch Metabolite From Ontologies Failure',
  props<{ error: any }>()
);

export const fetchOntologiesFromMetabolites = createAction(
  '[Ramp/API] Fetch OntologiesFromMetabolites',
  props<{analytes: string[]}>()
);

export const fetchOntologiesFromMetabolitesSuccess = createAction(
  '[Ramp/API] Fetch OntologiesFromMetabolites Success',
  props<{ ontologies: Ontology[] }>()
);

export const fetchOntologiesFromMetabolitesFailure = createAction(
  '[Ramp/API] Fetch OntologiesFromMetabolites Failure',
  props<{ error: any }>()
);

export const fetchAnalytesFromPathways = createAction(
  '[Ramp/API] Fetch fetchAnalytesFromPathways',
  props<{pathways: string[]}>()
);

export const fetchAnalytesFromPathwaysSuccess = createAction(
  '[Ramp/API] Fetch fetchAnalytesFromPathways Success',
  props<{ analytes: Analyte[]}>()
);

export const fetchAnalytesFromPathwaysFailure = createAction(
  '[Ramp/API] Fetch fetchAnalytesFromPathways Failure',
  props<{ error: any }>()
);

export const fetchPathwaysFromAnalytes = createAction(
  '[Ramp/API] Fetch fetchPathwaysFromAnalytes',
  props<{analytes: string[]}>()
);

export const fetchPathwaysFromAnalytesSuccess = createAction(
  '[Ramp/API] Fetch fetchPathwaysFromAnalytes Success',
  props<{ pathways: Pathway[]}>()
);

export const fetchPathwaysFromAnalytesFailure = createAction(
  '[Ramp/API] Fetch fetchPathwaysFromAnalytes Failure',
  props<{ error: any }>()
);

export const fetchOntologyTypeahead = createAction(
  '[Ramp/API] Fetch fetchOntologyTypeahead',
  props<{term: string}>()
);

export const fetchOntologyTypeaheadSuccess = createAction(
  '[Ramp/API] Fetch fetchOntologyTypeahead Success',
  props<{ ontologies: any[]}>()
);

export const fetchOntologyTypeaheadFailure = createAction(
  '[Ramp/API] Fetch fetchOntologyTypeahead Failure',
  props<{ error: any }>()
);

export const fetchCommonReactionAnalytes = createAction(
  '[Ramp/API] Fetch fetchCommonReactionAnalytes',
  props<{analytes: string[]}>()
);

export const fetchCommonReactionAnalytesSuccess = createAction(
  '[Ramp/API] Fetch fetchCommonReactionAnalytes Success',
  props<{ reactions: any[]}>()
);

export const fetchCommonReactionAnalytesFailure = createAction(
  '[Ramp/API] Fetch fetchCommonReactionAnalytes Failure',
  props<{ error: any }>()
);

