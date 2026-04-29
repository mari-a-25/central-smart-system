import re

file_path = r"C:\Users\maria\Documents\central-smart-system\supabase\seed_massive.sql"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

def remove_subtotal_from_inserts(content):
    lines = content.split('\n')
    result_lines = []
    i = 0
    
    while i < len(lines):
        line = lines[i]
        
        if re.search(r'INSERT INTO public\.(detalles_pedido|detalles_orden_compra)', line):
            statement_lines = [line]
            i += 1
            
            while i < len(lines) and ';' not in lines[i]:
                statement_lines.append(lines[i])
                i += 1
            
            if i < len(lines):
                statement_lines.append(lines[i])
            
            full_statement = '\n'.join(statement_lines)
            full_statement = re.sub(r',\s*subtotal\s*(?=[,\)])', '', full_statement)
            full_statement = re.sub(r',\s*[0-9.]+\s*(?=\);)', ');', full_statement)
            result_lines.append(full_statement)
        else:
            result_lines.append(line)
        
        i += 1
    
    return '\n'.join(result_lines)

modified_content = remove_subtotal_from_inserts(content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(modified_content)

print("✓ Successfully removed subtotal column from detalles_pedido and detalles_orden_compra")
print(f"✓ File updated: {file_path}")
