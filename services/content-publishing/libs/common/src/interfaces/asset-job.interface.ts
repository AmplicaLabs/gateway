export interface IAssetJob {
  ipfsCid: string;
  mimeType: string;
  contentLocation: string;
  metadataLocation: string;
}

export interface IAssetMetadata {
  ipfsCid: string;
  mimeType: string;
  createdOn: number;
}
