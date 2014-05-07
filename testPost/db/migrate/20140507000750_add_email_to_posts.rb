class AddEmailToPosts < ActiveRecord::Migration
  def change
    add_column :posts, :email, :string
    add_column :posts, :discription, :string
  end
end
