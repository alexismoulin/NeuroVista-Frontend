import cortical from './cortical.json';
import subcortical from './subcortical.json';

export const aseg = { data: cortical.aseg, title: "General Segmentations", headers: ["Structure", "Volume (mm3)"] }
export const brain = { data: cortical.brain, title: "General Volumes", headers: ["Structure", "Volume (mm3)"] }
export const whiteMatter = { data: cortical.whitematter, title: "White Matter", headers: ["Structure", "Volume (mm3)"] }
export const lhsParcellation = {
    data: cortical.lh_dkatlas, title: "LHS Parcellations", headers: [
        "Structure", "Surface Area (mm2)", "Gray Matter Vol (mm3)", "Thickness Avg (mm)", "Mean Curvature (mm-1)"
    ]
}
export const rhsParcellation = {
    data: cortical.rh_dkatlas, title: "RHS Parcellations", headers: [
        "Structure", "Surface Area (mm2)", "Gray Matter Vol (mm3)", "Thickness Avg (mm)", "Mean Curvature (mm-1)"
    ]
}

export const hippocampus = {
    data: subcortical.hippocampus, title: "Hippocampus", headers: ["Structure", "RHS Volume (mm3)", "LHS Volume (mm3)"]
}
export const thalamus = { data: subcortical.thalamus, title: "Thalamus", headers: ["Structure", "Volume (mm3)"] }
export const amygdala = {
    data: subcortical.amygdala, title: "Amygdala", headers: ["Structure", "RHS Volume (mm3)", "LHS Volume (mm3)"]
}
export const brainStem = { data: subcortical.brain_stem, title: "Brain Stem", headers: ["Structure", "Volume (mm3)"] }
export const hypothalamus = { data: subcortical.hypothalamus, title: "Hypothalamus", headers: ["Structure", "Volume (mm3)"] }
