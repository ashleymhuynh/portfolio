class Add < ActiveRecord::Migration[6.1]
  def change
    add_column :projects, :languages, :string
  end
end
