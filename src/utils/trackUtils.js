import tracksData from '../data/tracks.json';

/**
 * Get track data by path (without music/ prefix)
 * @param {string} path - The path to the audio file (without music/ prefix)
 * @returns {object|null} Track data or null if not found
 */
export function getTrackData(path) {
	return tracksData[path] || null;
}

/**
 * Get all tracks for a specific project
 * @param {string} project - The project name
 * @returns {Array} Array of track objects with path and data
 */
export function getTracksByProject(project) {
	return Object.entries(tracksData)
		.filter(([, data]) => data.project === project)
		.map(([path, data]) => ({ path, ...data }));
}

/**
 * Get all tracks
 * @returns {Array} Array of all track objects with path and data
 */
export function getAllTracks() {
	return Object.entries(tracksData)
		.map(([path, data]) => ({ path, ...data }));
}

/**
 * Get tracks for the greatest hits section (personal project tracks)
 * @returns {Array} Array of greatest hits tracks
 */
export function getGreatestHits() {
	// Return specific tracks that are considered greatest hits
	const greatestHitsPaths = [
		'240919_wrrr.ogg',
		'221022_the.ogg',
		'241227_s.mp3',
		'bang.ogg'
	];

	return greatestHitsPaths
		.map(path => ({ path, ...tracksData[path] }))
		.filter(track => track.description !== undefined); // Only return tracks that exist
}
