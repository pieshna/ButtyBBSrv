export function addCreatedAt(json: any) {
  const date = new Date()
  json.created_at = date
  return json
}

export function addUpdatedAt(json: any) {
  const date = new Date()
  json.updated_at = date
  return json
}
