json.array!(@posts) do |post|
  json.extract! post, :id, :id, :photo
  json.url post_url(post, format: :json)
end
