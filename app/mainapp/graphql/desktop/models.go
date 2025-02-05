// Code generated by github.com/99designs/gqlgen, DO NOT EDIT.

package desktopgraphql

type Environments struct {
	ID          string  `json:"id"`
	Name        string  `json:"name"`
	Description *string `json:"description"`
	Active      *bool   `json:"active"`
}

type RemoteWorkersProcessGroups struct {
	RemoteProcessGroupID string `json:"remoteProcessGroupID"`
	EnvironmentID        string `json:"environmentID"`
	Name                 string `json:"name"`
	Description          string `json:"description"`
	Packages             string `json:"packages"`
	Lb                   string `json:"lb"`
	WorkerType           string `json:"workerType"`
	Language             string `json:"language"`
	Active               bool   `json:"active"`
}
